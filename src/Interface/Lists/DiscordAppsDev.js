const ServiceBase = require('../ServiceBase');

/**
 * Represents the Discord Apps service.
 * @see https://discordapps.dev/en-GB/posts/docs/api-v2/
 * @extends {ServiceBase}
 *
 * @constructor
 * @param {string} token The token/key for the service
 */
class DiscordAppsDev extends ServiceBase {
  static get aliases() {
    return ['discordappsdev', 'discordapps.dev', 'discordapps', 'dapps'];
  }

  static get logoURL() {
    return 'https://api.discordapps.dev/img/logo/logo128.png';
  }

  static get name() {
    return 'Discord Apps';
  }

  static get websiteURL() {
    return 'https://discordapps.dev';
  }

  static get baseURL() {
    return 'https://api.discordapps.dev/api/v2';
  }

  /**
   * Posts statistics to this service.
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
      headers: { Authorization: token },
      data: { bot: { count: serverCount } }
    });
  }

  /**
   * Gets a list of bots on this service.
   * @returns {Promise}
   */
  getBots() {
    return this._request({ url: '/bots' });
  }

  /**
   * Gets a list of applications on this service.
   * @returns {Promise}
   */
  getApps() {
    return this._request({ url: '/apps' });
  }

  /**
   * Gets a list of RPC applications on this service.
   * @returns {Promise}
   */
  getRPCApps() {
    return this._request({ url: '/rpc' });
  }

  /**
   * Gets the bot listed on this service.
   * @param {string} id The bot's ID
   * @returns {Promise}
   */
  getBot(id) {
    return this._request({ url: `/bots/${id}` });
  }
}

module.exports = DiscordAppsDev;
