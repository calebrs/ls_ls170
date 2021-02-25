/*
What is the internet and how does it work?

answer: The internet is a network of networks That functions in two parts: infrusturcture and protocols: The rules, or protocols of the internet govern the physical components, communication between nodes, data transfer, and all other 
aspects of the internet. Adherence to protocols by all participants allows the internet to function properly. The infustructure includes the physical devices that make up the 
network such as cmoputers, routers, wires etc.


What are some of the components of the physical network?

answer: Personal computers, routers, modems, switches, cables, physical servers.


What is latency and bandwidth?

answer: latency is a measure of delay from when data is sent from one point to another point. bandwidth is a measure of capacity or the amount of data that can be transfered.


how do lower level protocals work? (high level abstraction).

answer: at a higher level of abstraction, lower level protocols have a Protocal data unit which includes a header, a body and a footer. The header includes important meta data, the body is the payload
and the footer might also include some addionatl meta data. This PDU is the payload of the next layer. Lower level protocols govern how devices communicate to eachother on a network



What is an IP address and a port number?

answer: IP or internet Protocol is an identification number that helps routers route data from one place to another. IP allows for internetwork communication. The port
number comes after the IP address and allows for communication between applications, not just computers.

A prot is the identifier for a certain process running on a host.


How does DNS work?

answer: DNS stands for Domain name server. In its simplest form, DNS acts as a way to translate host names such as www.google.com to an IP address. For example, if you
type in google.com into the browswer, the browser will communicate with the DNS server to find the IP of that matches google.com. If that DNS server does not know the IP then it
will request another DNS server to check if it knows the IP of google.com. The chain continues until an IP is found. 


how does the client-server model work in the context of web interactions?

answer: In the client-server model, there is a client that requests data, and a server who serves the data. The client will sent an HTTP request to a server, perhaps
through a GET request. The server will recieve the request, process the requestm then send a response in the form of a header and HTML text document. The client then 
displays the HTML. 


what is TCP and UDP? How are they different?

answer: TCP is transport control protocol which "controls" data transfer. TCP makes the transfer of data more reliabe by recovering data that wasn't transfered correctly. It is
a conection oriented protocal. UPD or user datagram protocol, is not a conection-orinetd protocol and does not use a three-way handshake to establish a connection. The tradoffs
is that data delivered with UDP is not nearly as reliable as TCP delivered data. UPD can be much quick though.


What is the three way handshake and what is its purpose?

answer: The purpose of the three way handshake is to establish a connection between two entities. This allows TCP to manage connection state.


What is flow control and congestion avoidance?

answer:


What are the component of a URL?

answer:


construct a valid URL:

answer:


What is URL encoding and when is it used?

answer:


what are HTTP requests and responses and what are their components?

answer:


Describe the HTTP request/response cycle

answer:


What are status codes and describe the various types:

answer:


Describe 'state' in the context of the web. How do you simulate state?

answer:


what is the difference between GET and POST? 

answer:


What are the sucurity risks of HTTP? what can you do to mitigate those risks?

answer:


What are the differenct services that TLS provides?

answer:





*/