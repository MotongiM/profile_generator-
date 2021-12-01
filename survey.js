const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input,output});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    rl.question("What's an activity you like doing? ", (activity) => {
      rl.question("What do you listen to while doing that? ", (listen) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            rl.question("Which sport is your absolute favourite? ", (sport) => {
              rl.question("What is your superpower? ", (superpower) => {
                console.log(`${name} likes to listen to ${listen} while ${activity},they like to eat ${food} for ${meal}, they like ${sport} over any other sport and their superpower is ${superpower}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
});

