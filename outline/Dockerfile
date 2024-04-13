FROM alpine:latest

# Install necessary packages
RUN apk add --no-cache curl

# Download shadowsocks-rust
RUN curl -L https://github.com/shadowsocks/shadowsocks-rust/releases/download/v1.12.2/shadowsocks-v1.12.2.x86_64-unknown-linux-musl.tar.xz | tar xJ

# Copy your configuration file
COPY config.json /etc/shadowsocks-rust/config.json

# Expose the local port
EXPOSE 1080

# Command to run Shadowsocks
CMD ["./sslocal", "-c", "/etc/shadowsocks-rust/config.json"]
