"use strict";
// Order of SC Widget events:
// Very first time a track is played on page (or after track completely finishes): play --loading-- play
// After this (first time a track that hasn't been played yet is played OR when a track is seeked when paused and then played): play pause play --loading-- play
// Second time onwards: play play pause --loading-- play
class trackInfo {
  constructor(index, playEvents) {
    this.index = index;
    this.playEvents = playEvents;
  }
}
let trackList = [
  "PuzzlePieces",
  "FlyAway",
  "Dawn",
  "Daylight",
  "WolvesRemix",
  "Memento",
  "FetishRemix",
  "DMs",
  "LastChance",
  "FeelingThisIntro",
  "MyOwnWorstEnemyRemix",
  "HeavyRemix",
  "Dungeon",
  "CompetitionMix",
  "BoysofSummerRemix2",
  "PumpkinSpiceMix",
  "ChillaxMix",
  "ClocksRemix",
  "TheSun",
  "HandsOfFools",
  "Damaging",
  "LostAtSea",
  "SheWasMine",
  "SweatherWeather",
];
let trackMap = {};
let source = "";
let updateSlider = false;
let shouldBePlaying = false;
let playEvents = 0;
let pauseIconSet = false;

function createTrackMap() {
  for (let i = 0; i < trackList.length; i++) {
    trackMap[trackList[i]] = new trackInfo(i, 0);
  }
}

$(document).ready(function (e) {
  createTrackMap();
  var widget = SC.Widget("sc-player");
  widget.bind(SC.Widget.Events.READY, function () {
    // On change of slider (click somewhere else on the slider) seek sound to the position
    $(".circleSlider").on("change", function (e) {
      let icon = $(this).siblings(".playIcon");
      widget.getCurrentSoundIndex(function (index) {
        if (index === trackMap[icon[0].id].index) {
          widget.seekTo(e.value * 1000);
        }
      });
    });

    // On start drag, if current sound is playing then don't update the slider on PLAY_PROGRESS
    $(".circleSlider").on("start", function (e) {
      let icon = $(this).siblings(".playIcon");
      widget.isPaused(function (paused) {
        widget.getCurrentSoundIndex(function (index) {
          if (!paused && index === trackMap[icon[0].id].index) {
            updateSlider = false;
          }
        });
      });
    });

    // On stop drag, seek sound to the value of the slider and resume updating the slider on PLAY_PROGRESS
    $(".circleSlider").on("stop", function (e) {
      let circleSlider = $(this);
      let icon = $(this).siblings(".playIcon");
      widget.seekTo(e.value * 1000);
      widget.isPaused(function (paused) {
        widget.getCurrentSoundIndex(function (index) {
          if (!paused && index === trackMap[icon[0].id].index) {
            updateSlider = true;
          }
        });
      });
    });

    // On play, change the icon from play to pause and change all others to play icon
    $(".playIcon").click(function (event) {
      let icon = $(this);
      $(".playIcon")
        .not(this)
        .each(function () {
          $(this).removeClass("fa-pause fa-spinner fa-spin loadingIcon");
          $(this).addClass("fa-play");
        });

      // If current sound is playing, pause it
      widget.isPaused(function (paused) {
        let newOrPaused = paused;
        widget.getCurrentSoundIndex(function (index) {
          newOrPaused = newOrPaused || index !== trackMap[icon[0].id].index;
          if (!newOrPaused) {
            updateSlider = false;
            widget.unbind(SC.Widget.Events.PAUSE);
            widget.bind(SC.Widget.Events.PAUSE, function () {
              $(icon).removeClass("fa-pause fa-spinner fa-spin loadingIcon");
              $(icon).addClass("fa-play");
            });
            widget.pause();
            shouldBePlaying = false;
            trackMap[icon[0].id].playEvents = 0;
          }
          // If paused or starting a new track, seek sound to the position of the slider and play.
          else {
            updateSlider = false;
            widget.pause();
            widget.skip(trackMap[icon[0].id].index);
            if (source !== "") trackMap[source].playEvents = 0;
            source = icon[0].id;
            let playbackPosition = $(icon.siblings(".circleSlider")[0]).roundSlider("option", "value") * 1000;
            widget.seekTo(playbackPosition);
            updateSlider = true;
            widget.unbind(SC.Widget.Events.PLAY);
            widget.bind(SC.Widget.Events.PLAY, function () {
              playEvents++;
              trackMap[icon[0].id].playEvents++;
              pauseIconSet = false;
              if (playEvents === 1 || (playEvents > 2 && trackMap[icon[0].id].playEvents === 2)) {
                // Set icon to loading until sound fully loads
                widget.getPosition(function (position) {
                  if (shouldBePlaying && position === playbackPosition && !pauseIconSet) {
                    $(icon).removeClass("fa-play fa-pause");
                    $(icon).addClass("fa-spinner fa-spin loadingIcon");
                  }
                });
              } else {
                pauseIconSet = true;
                $(icon).removeClass("fa-play fa-spinner fa-spin loadingIcon");
                $(icon).addClass("fa-pause");
              }
              // Set slider max to duration of sound
              widget.getDuration(function (duration) {
                $(icon.siblings(".circleSlider")[0]).roundSlider("option", "max", duration / 1000);
              });
            });
            // Update value of slider as PLAY_PROGRESS occurs
            widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
            widget.bind(SC.Widget.Events.PLAY_PROGRESS, function (progress) {
              if (updateSlider) {
                $(icon.siblings(".circleSlider")[0]).roundSlider("option", "value", progress.currentPosition / 1000);
              }
            });
            widget.play();
            shouldBePlaying = true;
          }
        });
      });
    });
  });

  // When sound finishes playing
  widget.bind(SC.Widget.Events.FINISH, function () {
    widget.unbind(SC.Widget.Events.PLAY);
    widget.unbind(SC.Widget.Events.PAUSE);
    let icon = $("#" + source);
    icon.removeClass("fa-pause fa-spinner fa-spin loadingIcon");
    icon.addClass("fa-play");
    trackMap[source].playEvents = 0;
    shouldBePlaying = false;
    playEvents = 0;
    widget.pause();
  });
});
