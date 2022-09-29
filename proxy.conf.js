const PROXY_CONFIG = [{
  context:['/api'],
  target:'http://localhost:8080/',
  // target:'http://ec2-54-86-171-218.compute-1.amazonaws.com:8080/',
  secure:false,
  logLevel:'debug'
}];

module.exports = PROXY_CONFIG;
