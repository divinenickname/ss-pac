function FindProxyForURL(url, host) {
    const hosts = [ 
        "rutracker.org",
        "2ip.ru",
        "chat.openai.com",
        "cdn.oaistatic.com"
    ]

    var proxy = "SOCKS localhost:1080"

    // Direct connection for local addresses
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0")) {
        return "DIRECT";
    }

    // Proxy for specific domains or URL patterns
    for (var i = 0; i < hosts.length; i++) {
        if (shExpMatch(host, hosts[i])) {
            return proxy;
        }
    }

    // Default proxy
    return "DIRECT"; // No proxy for other URLs
}
