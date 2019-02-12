


module.exports = (robot) => {
   //   var cron = require('node-cron');

   // cron.schedule('0 0 9 * 2,3 */Sunday', () => {
   //    res.send('Remmember to submet your work')
   // })


   robot.hear(/hi/, function (res) {
      let greetings = ["Hi", "Hello", "Hola", "Ola", "Namaste", "bonjour", "هلا"]
      let rand = Math.floor(Math.random() * greetings.length)
      return res.send(`${greetings[rand]}`);
   });

   //
   robot.hear(/whos coming today/i, (res) => {
      res.reply("Me, just wait until I get out of here")
      setTimeout(() => res.reply("I think I'm stuck -_-'"), 300 * 1000)
   })

   robot.hear(/boared/i, (res) => {

      res.send('Lets play a game')
      robot.respond(/(.*)/i, (res) => {
         const ans = res.match[1]
         if (ans === 'ok') {
            res.reply('yaaaay')

            setTimeout(() => 
               res.reply("you know.....\n I'm busy right now so let's play another time :D"), 3000)

            return
         }
         else {
            res.reply('no offens but youre not fun')
            return
         }

      })
   })



}
