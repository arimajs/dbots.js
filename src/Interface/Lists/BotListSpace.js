const ServiceBase = require('../ServiceBase');

/**
 * Represents the botlist.space's service
 * @see https://docs.botlist.space/
 * @extends {ServiceBase}
 * 
 * @constructor
 * @param {string} token The token/key for the service
 */
class BotListSpace extends ServiceBase {
  static get aliases() {
    return ['botlistspace', 'botlist.space', 'bls'];
  }

  static get logoURL() {
    return 'https://i.olsh.me/icon?size=1..100..500&url=botlist.space';
  }

  static get name() {
    return 'botlist.space';
  }

  static get websiteURL() {
    return 'https://botlist.space';
  }

  static get baseURL() {
    return 'https://api.botlist.space/v1';
  }

  /**
   * Posts statistics to this service
   * @param {Object} options The options of the request
   * @param {string} options.token The Authorization token for the request
   * @param {string} options.clientID The client ID that the request will post for
   * @param {number} options.serverCount The amount of servers that the client is in
   * @returns {Promise}
   */
  static post({ token, clientID, serverCount }) {
    return super._post({
      method: 'post',
      url: `/bots/${clientID}`,
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      data: { server_count: serverCount }
    });
  }

  /**
   * Gets the statistics of this service
   * @returns {Promise}
   */
  getStatistics() {
    return this._request({ url: '/statistics' });
  }

  /**
   * Gets a list of bots on this service
   * @returns {Promise}
   */
  getBots() {
    return this._request({ url: '/bots' });
  }

  /**
   * Gets the bot listed for this service
   * @param {string} id The bot's ID.
   * @returns {Promise}
   */
  getBot(id) {
    return this._request({ url: `/bots/${id}` });
  }

  /**
   * Gets the data on the voters for this bot
   * @param {string} id The bot's ID.
   * @returns {Promise}
   */
  getBotVotes(id) {
    return this._request({
      url: `/bots/${id}/upvotes`,
      headers: { Authorization: this.token }
    }, {
      requiresToken: true
    });
  }

  /**
   * Gets the uptime of a bot listed for this service
   * @param {string} id The bot's ID.
   * @returns {Promise}
   */
  getBotUptime(id) {
    return this._request({ url: `/bots/${id}/uptime` });
  }

  /**
   * Gets the user listed for this service
   * @param {string} id The user's ID.
   * @returns {Promise}
   */
  getUser(id) {
    return this._request({ url: `/users/${id}` });
  }

  /**
   * Gets the user's bots listed for this service
   * @param {string} id The user's ID.
   * @returns {Promise}
   */
  getUserBots(id) {
    return this._request({ url: `/users/${id}/bots` });
  }

  /**
   * Gets the widget URL for this bot
   * @param {string} id The bot's ID.
   * @param {string} [style=1] The style of the widget
   * @param {Object} [query] The querystring that will be used in the request
   * @returns {string}
   */
  getBotWidget(id, style = 1, query = undefined) {
    return this._appendQuery(`https://api.botlist.space/widget/${id}/${style}`, query, false);
  }
}

module.exports = BotListSpace;