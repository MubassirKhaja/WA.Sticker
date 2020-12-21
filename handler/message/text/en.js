exports.textTnC = () => {
    return `

By using this source code / bot, you agree to the following Terms and Conditions:
- Source code / bot does not store your data on our servers.
- The source code / bot is not responsible for the stickers you make from this bot and the videos, images and other data that you get from the source code / bot.
- Source code / bot may not be used for services that aim / contribute to:
    • sex / human trafficking
    • gambling
    • harmful addictive behavior
    • crime
    • violence (unless necessary to protect public safety)
    • burning forest/ deforestation
    • hate speech or discrimination based on age, sex, gender identity, race, sexuality, religion, nationality

Maintained by MubK :)
`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname || ''}! 👋️
Here are some of the features of this bot! ✨

Sticker Maker:
1. *#sticker*
To convert an image into a sticker, send the image with the caption #sticker or reply to the image that has been sent with #sticker.

2. *#stickers* _<Image Url>_
To change the image from the url to a sticker.

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
To turn a gif into a sticker (Giphy only)

4. *#sgif* 
To turn a gif/video into a sticker (NOTE : gif/video size should be below 1MB and scale should be 512*512)

Etc:
1. *#tnc*
Displays Bot Terms and Conditions.

Hope you have a great day!✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Here are some of the group admin features included in this bot!

1. *#kick* @user
Removing members from the group (can be more than 1).

2. *#promote* @user
Promote members to group admins.

3. *#demote* @user
Demote Group admins.

3. *#tagall*
Mention of all group members.`

}



exports.reply = (pushname) => {
    return `
Hey , ${pushname || ''} !
Your animated sticker is being processed
Please wait ⏳.
`
}

exports.done = (pushname) => {
    return `
Hey , ${pushname || ''} ! Here's your sticker!

`
}



exports.textDonasi = (pushname) => {
    return `
Hey , ${pushname || ''} !
If you'd like to donate , you can do a UPI Payment on +919494600090 
Thanks :)

`
}
