const discord = require('discord.js');
const client = new discord.Client();
const {prefix, token} = require('./config.json')
const activities_list = [
    "made by hodugwaja", 
    "무슨짓을 하는지 생각"
];

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag} `);
            
    setInterval(() => {
        const index = random(1, activities_list.length-1);
        client.user.setActivity(activities_list[index]);
    }, 10000); 
    
    
});

client.on('messsage', (message) => {

})

client.login(token);