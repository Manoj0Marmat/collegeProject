import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import $ from "jquery";
import { scroller } from "react-scroll";
import WtoN from "words-to-num";

export default function Alan() {
  useEffect(() => {
    let faqid = 0;
    let currentHeight = document.documentElement.scrollTop;
    alanBtn({
      key: "44b4480fee39b8c68596ef80886ba8ae2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        // start
        let totalHeight = document.body.scrollHeight;
        // ****global command

        //scorll down
        if (commandData.command === "scrollDown") {
          currentHeight = document.documentElement.scrollTop;
          if (currentHeight > totalHeight) currentHeight = totalHeight;
          currentHeight += totalHeight / 4;
          window.scrollTo({
            top: currentHeight,
            behavior: "smooth",
          });
        }
        //scroll up
        if (commandData.command === "scrollUp") {
          currentHeight = document.documentElement.scrollTop;
          if (currentHeight < 0) currentHeight = 0;
          currentHeight -= totalHeight / 4;
          window.scrollTo({
            top: currentHeight,
            behavior: "smooth",
          });
        }
        // read jumbotron content
        if (commandData.command === "gotoJumbo") {
          scroller.scrollTo(`jumbo-item-${commandData.itemId}`, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        // read Faq content
        if (commandData.command === "gotoFaq") {
          scroller.scrollTo(`question-${commandData.faqId - 1}`, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
          if (faqid !== commandData.faqId) {
            $(
              setTimeout(function () {
                document
                  .getElementById(`question-${commandData.faqId - 1}`)
                  .click();
              }, 1000)
            );
            faqid = commandData.faqId;
          }
        }
        // Footer content
        if (commandData.command === "gotoPage") {
          scroller.scrollTo(`footer-link-${commandData.linkIndex}`, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });

          $(
            setTimeout(function () {
              var href = $(`#${commandData.linkIndex}`).attr("href");
              window.location.href = href;
            }, 1000)
          );
        }
        // browser content
        if (commandData.command === "openMovie") {
          let movieId = WtoN.convert(commandData.movieid);
          if (movieId >= 0 && movieId <= 25) {
            scroller.scrollTo(`movie-${movieId}`, {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
            });
            $(
              setTimeout(function () {
                document.getElementById(movieId).click();
              }, 1000)
            );
          } else {
          }
        }
        // closing movie card
        if (commandData.command === "closeMovie") {
          let movieId = WtoN.convert(commandData.movieid);

          $(
            setTimeout(function () {
              document.getElementById(`movieclose-${movieId}`).click();
            }, 1000)
          );
        }
        // srtart movie
        if (commandData.command === "playMovie") {
          let movieId = WtoN.convert(commandData.movieid);
          $(
            setTimeout(function () {
              document.getElementById(`playMovie-${movieId}`).click();
            }, 1000)
          );
        }
        // show movies
        if (commandData.command === "showMovies") {
          $(
            setTimeout(function () {
              document.getElementById("movies").click();
            }, 1000)
          );
        }
        // show series
        if (commandData.command === "showSeries") {
          $(
            setTimeout(function () {
              document.getElementById("series").click();
            }, 1000)
          );
        }
        // sign out
        if (commandData.command === "signOut") {
          $(
            setTimeout(function () {
              document.getElementById("profile").click();
            }, 1000)
          );
          $(
            setTimeout(function () {
              document.getElementById("signOut").click();
            }, 1000)
          );
        }
      },
    });
  }, []);
}
