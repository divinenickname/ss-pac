# Shadowsocks with .pac (ss-pac)
A simple, home-ready solution for traffic routing using the Shadowsocks protocol. If you don't want to switch proxies just to access certain sites, this solution can help you.

You can configure the list of sites that you want to open through the proxy. The server returns a .pac file which you can use in your system settings.

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
1. Add link `http://localhost:8999/localproxy.pac` to your system settings. [See more](#where-should-i-place-pac-link)
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

### Where should I place pac link?
The service generates a .pac file which you should place in the system settings field. Note that the procedure may vary across different systems.

PAC URL: `http://localhost:8999/localproxy.pac`

#### Windows
Start -> Settings -> Network & Internet -> Proxy -> Use Setup Script -> URL  
[Microsoft documentation](https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1#ID0EFD=Windows_10)

#### Mac OS
System Settings -> Network -> Details - Proxies -> Automatic proxy configuration -> URL
[Apple documentation](https://support.apple.com/zh-sg/guide/mac-help/mchlp2591/mac)