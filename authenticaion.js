const hosts_local = {
    primes_service: "http://localhost:8080"
};

const hosts_remote = {
    primes_service: "https://primes-service.onrender.com"
};

const mode = 0;

function getHosts() {
    return (mode == 0) ? hosts_loal : hosts_remote;
}

let authentication = {loggedIn: false, hosts: getHost(), token: ""};