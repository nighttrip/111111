const Discord = require("discord.js");
  const bot = new Discord.Client();
      bot.on('ready', () => {
          console.log('ONLINE!');
		     


			 let statuses = [
        
        
        
        
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            bot.user.setActivity(status, {type:"PLAYING"})
    
        }, 10000) 

  
        });





   bot.on("message", message => {
       var prefix = "$";
 
             var args = message.content.substring(prefix.length).split(" ");

       bot.on('message', message => {
                                      if (message.content.split(' ')[0] == '/b')
                                                message.guild.members.forEach( member => {
                                        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
                                         member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                        
                                          message.delete();
            
});
            
});



               if (message.content.startsWith(prefix + "go")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
                           var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== '*').forEach(m => {
              m.send(`${argresult}\n ${m}`);
 
})


                          if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark:   | message request accepted.")
                                    
                                    .setColor("#00ff33")
                                    .setTitle (".")
									                  .setFooter ("AlifaDM")
                                    .setImage('');
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {
                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | ')
                                                                .setColor("#99999")
                                                                .setFooter ("AlifaDM")
                                                                .setTitle ('Messages sent successfully.')
                                                                
                               
                                                                message.channel.sendEmbed(embed4);
                                                                message.delete();
                            }
                          }
						

 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "help")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
						                            if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription("none")
                                     .setTitle ('none')
                                     .setImage ('')
                                       .setColor("#FF00F0")
									                     .setFooter ("none")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                                                      message.delete();
                            }
                          }



                     
});
bot.login("");
