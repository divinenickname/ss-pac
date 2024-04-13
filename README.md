# Shadowsocks with .pac (ss-pac)
A simple, home-ready solution for traffic routing using the Shadowsocks protocol. If you don't want to switch proxies just to access certain sites, this solution can help you.

## Getting starting
**Prerequisites:** You need to have Docker and Docker Compose installed. If you are not familiar with these tools, please refer to this [link](https://www.docker.com/products/docker-desktop/).

### Step-by-Step Installation
1. Install Docker and Docker Compose.
1. Fork the repository or download it to your PC.
1. Configure the `./outline/config.json` file with your specific parameters. Explanation of this file [here](#how-to-configure-configjson)
1. Add sites that you want to open through the proxy: 
    1. Open the file`./pac-server/localproxy.pac`
    1. Find the line `const hosts = [ "place urls here" ]`
    1. Add the URLs you need. For example, if you want add `google.com` and `bing.com` the `hosts` variable should look like this: `const hosts = ["google.com", "bing.com"];`
1. Run the following command in the terminal: `docker compose up -d`.
1. Enjoy!

### How to configure config.json?

|JSON param|Description|
|--|--|
|server|Outline ***server*** address. You have to provide it.|
|server_port|Outline ***server*** port. You have to provide it.|
|password|Outline ***server*** password. You have to provide it.|
|method|Outline ***server*** crypt method. You have to provide it.|
|local_address|Outline ***client*** host. Leave `"0.0.0.0"`|
|local_port|Outline ***client*** port. Leave `1080`|
|timeout|Leave `300`|

If you have outline link like `ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpRd2VydHkxMjM@192.168.0.35:123456/?outline=1`. You need to decode base64 string between `ss://` and symbol `@`. You can use [web decoder](https://www.base64decode.org/). Example ss link contains information: `chacha20-ietf-poly1305:Qwerty123`.

`chacha20-ietf-poly1305` - method  
`Qwerty123` - password  
`192.168.0.35` - server  
`123456` - password