'use strict'

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export function register(registrations) {
  var socket = SockJS('http://localhost:8000/payroll');
  var stompClient = Stomp.over(socket);
  stompClient.connect({}, function(frame) {
    registrations.forEach(function(registration) {
      stompClient.subscribe(registration.route, registration.callback);
    });
  });
}

export function register2(registrations) {
  var socket = SockJS('http://localhost:8000/gs-guide-websocket');
  var stompClient = Stomp.over(socket);
  stompClient.connect({}, function(frame) {
    registrations.forEach(function(registration) {
      stompClient.subscribe(registration.route, registration.callback);
    });
  });
}

