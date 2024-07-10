// const dns = require('dns');

// const domain = 'example.com';


// const performDNSLookups = (domain) => {

//   dns.resolve4(domain, (err, addresses) => {
//     if (err) {
//       console.log(`Error resolving IPv4 addresses: ${err}`);
//     } else {
//       console.log(`IPv4 addresses: ${JSON.stringify(addresses)}`);
//     }
//   });

//   dns.lookup(domain, (err, address) => {
//     if (err) {
//       console.log(`Error looking up address: ${err}`);
//     } else {
//       dns.reverse(address, (err, hostnames) => {
//         if (err) {
//           console.log(`Error performing reverse lookup: ${err}`);
//         } else {
//           console.log(`Reverse lookup: ${JSON.stringify(hostnames)}`);
//         }
//       });
//     }
//   });

//   dns.resolve6(domain, (err, addresses) => {
//     if (err) {
//       console.log(`Error resolving IPv6 addresses: ${err}`);
//     } else {
//       console.log(`IPv6 addresses: ${JSON.stringify(addresses)}`);
//     }
//   });


//   dns.resolveMx(domain, (err, addresses) => {
//     if (err) {
//       console.log(`Error resolving MX records: ${err}`);
//     } else {
//       console.log(`MX records: ${JSON.stringify(addresses)}`);
//     }
//   });
// };

// performDNSLookups(domain);
