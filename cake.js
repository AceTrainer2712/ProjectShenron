exports.cake = 'cake';
exports.target = 'himself';

exports.cakefn = function (cake, user, target) {
	message.channel.send(':' + cake + ':' + ' | ' + user + ' has given ' + '@' + target + ' a ' + cake + '!');
}