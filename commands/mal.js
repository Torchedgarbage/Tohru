exports.run = (tohru, msg, args) => {
    const Jikan = require("jikan-node");
    const mal = new Jikan();

    mal.findUser(args[0])
    .then(i => {
        console.log(i)
        msg.channel.createMessage({embed: {
            color: 0xFAB41D,
            author: {
                name: "Tohru - MyAnimeList",
                icon_url: tohru.user.avatarURL
            },
            thumbnail: {
                url: i.image_url
            },
            description: `${i.username}\n**About:** ${i.about}\n${i.url}\n`,
            fields: [
                {
                    "name": "Completed",
                    "value": i.anime_stats.completed,
                    "inline": true
                },
                {
                    "name": "Watching",
                    "value": i.anime_stats.watching,
                    "inline": true
                },
                {
                    "name": "Plan to Watch",
                    "value": i.anime_stats.plan_to_watch,
                    "inline": true
                },
                {
                    "name": "On Hold",
                    "value": i.anime_stats.on_hold,
                    "inline": true
                },
                {
                    "name": "Dropped",
                    "value": i.anime_stats.dropped,
                    "inline": true
                },
                {
                    "name": "Total Entries",
                    "value": i.anime_stats.total_entries,
                    "inline": true
                }
            ],
            timestamp: i.joined,
            footer: {
                text: "Joined",
                icon_url: i.image_url
            }
        }})
    })
    .catch(e => console.log(e))
}

exports.config = {
    aliases: ["myanimelist"]
}

exports.help = {
    name: "mal",
    desc: "Search for a MyAnimeList profile.",
    usage: "mal <username>"
}