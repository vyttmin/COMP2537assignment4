$(document).ready(() => {
  const easyCardsCount = 6;
  const easyMatches = 3;
  const mediumCardsCount = 12;
  const mediumMatches = 6;
  const hardCardsCount = 24;
  const hardMatches = 12;
  let gameOver = false;

  // Easy Mode
  const easySetup = () => {
    let matchCount = 0;
    let flip = 0;
    let accuracy = 0;
    let totalMatches = easyMatches;
    let numberOfPairLeft = totalMatches;
    let firstCard = undefined;
    let secondCard = undefined;
    let timer;
    var flippedCards = 0;
    var canFlip = true;

    const updateGameInfo = () => {
      $('#title').hide();
      accuracy = flip !== 0 ? Math.round((matchCount / flip) * 100) : 0;
      $("#totalPair").text(easyMatches);
      $("#pairCount").text(numberOfPairLeft);
      $("#matchCount").text(matchCount);
      $("#clickCount").text(flip);
      $("#accuracy").text(accuracy);
    };

    const startTimer = () => {
      let timeLeft = 100;
      $("#timer").text(timeLeft);

      timer = setInterval(() => {
        timeLeft--;
        $("#timer").text(timeLeft);

        if (timeLeft === 0) {
          clearInterval(timer);
          $(".game-grid").hide();
          $("#message").text("Game Over!");
          location.reload();
        }
        if (matchCount === totalMatches) {
          clearInterval(timer);
        }
      }, 1000);
    };
    
    $(".card").on("click", function() {
      if ($(this).hasClass("flip") || flippedCards === 2 || !canFlip) {
        return;
      }
    
      $(this).toggleClass("flip");
      flippedCards++;
      updateGameInfo();
    
      if (!firstCard) {
        firstCard = $(this).find(".front_face");
      } else {
        secondCard = $(this).find(".front_face");
        console.log(firstCard, secondCard);
        if (firstCard.attr("src") === secondCard.attr("src")) {
          console.log("match");
          matchCount++;
          numberOfPairLeft--;
          firstCard.parent().off("click");
          secondCard.parent().off("click");
          if (matchCount === totalMatches) {
            gameOver = true;
            setTimeout(() => {
              $("#message").text("You Win!");
            }, 500);
          }
          updateGameInfo();
          firstCard = undefined;
          secondCard = undefined;
        } else {
          console.log("no match");
          canFlip = false;
          setTimeout(() => {
            $(this).toggleClass("flip");
            if (firstCard) {
              firstCard.parent().toggleClass("flip");
            }
            firstCard = undefined;
            secondCard = undefined;
            flippedCards = 0;
            canFlip = true;
          }, 1000);
        }
        flip++;
        updateGameInfo();
      }
    
      if (flippedCards === 2) {
        flippedCards = 0;
        canFlip = false;
        setTimeout(() => {
          canFlip = true;
        }, 1000);
      }
    });
    
    updateGameInfo();
    startTimer(200);
  };

  // Medium Mode
  const mediumSetup = () => {
    let matchCount = 0;
    let flip = 0;
    let accuracy = 0;
    const totalMatches = mediumMatches;
    let numberOfPairLeft = totalMatches;
    let firstCard = undefined;
    let secondCard = undefined;
    var flippedCards = 0;
    var canFlip = true;

    const updateGameInfo = () => {
      $('#title').hide();
      accuracy = flip !== 0 ? Math.round((matchCount / flip) * 100) : 0;
      $("#totalPair").text(mediumMatches);
      $("#pairCount").text(numberOfPairLeft);
      $("#matchCount").text(matchCount);
      $("#clickCount").text(flip);
      $("#accuracy").text(accuracy);
    };

    const startTimer = (timeLimit) => {
      let timeLeft = timeLimit;
      $("#timer").text(timeLeft);

      timer = setInterval(() => {
        timeLeft--;
        $("#timer").text(timeLeft);

        if (timeLeft === 0) {
          clearInterval(timer);
          $(".game-grid").hide();
          $("#message").text("Game Over!");
          location.reload();
        }
        if (matchCount === totalMatches) {
          gameOver = true;
          clearInterval(timer);
        }
      }, 1000);
    };

    $(".card").on("click", function() {
      if ($(this).hasClass("flip") || flippedCards === 2 || !canFlip) {
        return;
      }
    
      $(this).toggleClass("flip");
      flippedCards++;
      updateGameInfo();
    
      if (!firstCard) {
        firstCard = $(this).find(".front_face");
      } else {
        secondCard = $(this).find(".front_face");
        console.log(firstCard, secondCard);
        if (firstCard.attr("src") === secondCard.attr("src")) {
          console.log("match");
          matchCount++;
          numberOfPairLeft--;
          firstCard.parent().off("click");
          secondCard.parent().off("click");
          if (matchCount === totalMatches) {
            gameOver = true;
            setTimeout(() => {
              $("#message").text("You Win!");
            }, 500);
          }
          updateGameInfo();
          firstCard = undefined;
          secondCard = undefined;
        } else {
          console.log("no match");
          canFlip = false;
          setTimeout(() => {
            $(this).toggleClass("flip");
            if (firstCard) {
              firstCard.parent().toggleClass("flip");
            }
            firstCard = undefined;
            secondCard = undefined;
            flippedCards = 0;
            canFlip = true;
          }, 1000);
        }
        flip++;
        updateGameInfo();
      }

      if (flippedCards === 2) {
        flippedCards = 0;
        canFlip = false;
        setTimeout(() => {
          canFlip = true;
        }, 1000);
      }
    });

    updateGameInfo();
    startTimer(200);
  };

  // Hard Mode
  const hardSetup = () => {
    let matchCount = 0;
    let flip = 0;
    let accuracy = 0;
    const totalMatches = hardMatches;
    let numberOfPairLeft = totalMatches;
    let firstCard = undefined;
    let secondCard = undefined;
    var flippedCards = 0;
    var canFlip = true;

    const updateGameInfo = () => {
      $('#title').hide();
      accuracy = flip !== 0 ? Math.round((matchCount / flip) * 100) : 0;
      $("#totalPair").text(hardMatches);
      $("#pairCount").text(numberOfPairLeft);
      $("#matchCount").text(matchCount);
      $("#clickCount").text(flip);
      $("#accuracy").text(accuracy);
    };

    const startTimer = (timeLimit) => {
      let timeLeft = timeLimit;
      $("#timer").text(timeLeft);

      timer = setInterval(() => {
        timeLeft--;
        $("#timer").text(timeLeft);

        if (timeLeft === 0) {
          clearInterval(timer);
          $(".game-grid").hide();
          $("#message").text("Game Over!");
          location.reload();
        }
        if (matchCount === totalMatches) {
          gameOver = true;
          clearInterval(timer);
        }
      }, 1000);
    };

    $(".card").on("click", function() {
      if ($(this).hasClass("flip") || flippedCards === 2 || !canFlip) {
        return;
      }
    
      $(this).toggleClass("flip");
      flippedCards++;
      flip++;
      updateGameInfo();
    
      if (!firstCard) {
        firstCard = $(this).find(".front_face");
      } else {
        secondCard = $(this).find(".front_face");
        console.log(firstCard, secondCard);
        if (firstCard.attr("src") === secondCard.attr("src")) {
          console.log("match");
          matchCount++;
          numberOfPairLeft--;
          firstCard.parent().off("click");
          secondCard.parent().off("click");
          if (matchCount === totalMatches) {
            gameOver = true;
            setTimeout(() => {
              $("#message").text("You Win!");
            }, 500);
          }
          updateGameInfo();
          firstCard = undefined;
          secondCard = undefined;
        } else {
          console.log("no match");
          canFlip = false;
          setTimeout(() => {
            $(this).toggleClass("flip");
            if (firstCard) {
              firstCard.parent().toggleClass("flip");
            }
            firstCard = undefined;
            secondCard = undefined;
            flippedCards = 0;
            canFlip = true;
          }, 1000);
        }
        flip++;
        updateGameInfo();
      }
    
      if (flippedCards === 2) {
        flippedCards = 0;
        canFlip = false;
        setTimeout(() => {
          canFlip = true;
        }, 1000);
      }
    });

    updateGameInfo();
    startTimer(300);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const diffucultyStyle = (difficulty) => {
    const gameGrid = $("#game_grid");
    let cardWidth, cardPaddingBottom;

    if (difficulty === "easy") {
      cardWidth = "33.3%";
      cardPaddingBottom = "33.3%";
      gameGrid.css("--cards-per-row", "3");
    } else if (difficulty === "medium") {
      cardWidth = "25%";
      cardPaddingBottom = "25%";
      gameGrid.css("--cards-per-row", "4");
    } else if (difficulty === "hard") {
      cardWidth = "16.6%";
      cardPaddingBottom = "16.6%";
      gameGrid.css("--cards-per-row", "6");
    }

    gameGrid.css("--card-width", cardWidth);
    gameGrid.css("--card-padding-bottom", cardPaddingBottom);
  };

  $("#startButton").on("click", function () {

    $("#gameInfo").css("display", "block");

    const difficulty = $("#difficultySelect").val();

    $("#game_grid").empty();
    let totalCardsCount, totalMatches;

    if (difficulty === "easy") {
      totalCardsCount = easyCardsCount;
      totalMatches = easyMatches;
    } else if (difficulty === "medium") {
      totalCardsCount = mediumCardsCount;
      totalMatches = mediumMatches;
    } else if (difficulty === "hard") {
      totalCardsCount = hardCardsCount;
      totalMatches = hardMatches;
    }

    const powerUp = () => {
      if (gameOver === true) {
        return;
      }
      $("#message").text("Power up!");

      setTimeout(() => {
        $("#message").html("<br>");
      }, 2000);

      $(".card").each(function () {
        if ($(this).attr("data-matched") !== "true") {
          $(this).toggleClass("flip");
        }
      });

      setTimeout(() => {
        $(".card").each(function () {
          if ($(this).attr("data-matched") !== "true") {
            $(this).toggleClass("flip");
          }
        });
      }, 1000);
    };

    if (difficulty !== "easy") {
      setInterval(powerUp, 30000);
    }

    const cardPositions = Array.from({ length: totalCardsCount }, (_, index) => index);
    const shuffledPositions = shuffleArray(cardPositions);

    shuffledPositions.forEach(() => {
      $("#game_grid").append(`
        <div class="card">
          <img class="front_face" alt="" src="">
          <img class="back_face" src="back.webp" alt="">
        </div>
      `);
    });

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=810")
      .then((response) => {
        const pokemon = response.data.results;

        const randomPokemon = [];
        while (randomPokemon.length < totalMatches) {
          const index = Math.floor(Math.random() * pokemon.length);
          const poke = pokemon[index];
          if (!randomPokemon.some((p) => p.name === poke.name)) {
            randomPokemon.push(poke);
          }
        }

        const cardPokemon = [];
        for (let i = 0; i < totalCardsCount; i++) {
          cardPokemon.push(randomPokemon[i % totalMatches]);
        }

        const shuffledPokemon = shuffleArray(cardPokemon);

        $(".card").each((index, element) => {
          const id = shuffledPokemon[index].url.split("/")[6];
          const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          const frontFace = $(element).find(".front_face");
          frontFace.attr("src", imgUrl);
        });

        diffucultyStyle(difficulty);
        if (difficulty === "easy") {
          easySetup();
        } else if (difficulty === "medium") {
          mediumSetup();
        } else if (difficulty === "hard") {
          hardSetup();
        }
      })

      .catch((error) => {
        console.log("Error fetching Pokémon data:", error);
      });

  });
  
  $("#startButton").on("click", function () {
    $("#startButton").hide();
    $("#difficultySelect").hide();
  });
  

  $('#theme').on('click', function () {
    const bodyElement = $("body");
    bodyElement.toggleClass('dark');
    if (bodyElement.hasClass('dark')) {
      $('#theme').text('Light Mode');
    } else {
      $('#theme').text('Dark Mode');
    }
  });
  
  $('#reset').on('click', function () {
    location.reload();
  });
  
});