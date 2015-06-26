var methods = require("../../methods");
var debug = require("../../debug");
var emoji = require('node-emoji');

var keyboardtest = {};

keyboardtest.parseTextMsg = function(message)
{
    if (message.text == "/keyboardtest")
    {
        var rkm = {
            keyboard: [[emoji.get('coffee'), emoji.get('heart'),emoji.get('banana'), emoji.get('dog')], ["2R_1", "2R_2", "2R_3", "2R_4"]],
            resize_keyboard: true,
            one_time_keyboard: false,
            selective: true
        }
        methods.sendMessage(message.chat.id, "Your test worked perfectly!", null, message.message_id, rkm);
    }
}	

module.exports = keyboardtest;