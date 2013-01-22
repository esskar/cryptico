test( "512 bit key generation.", function() {
	testGeneration(512, "Fgl-;pWo", "lRXADCsCIxvCWsqKytZPQLC/Mf8jtLSKLMYiro2YWxihhH6mvn67uXIYznPG2YoBXboFXyh5DF+7zo1ROqG8ew==");
	testGeneration(512, "9sfTPTLs", "iCXYcrmet8YEtkm0VokU/LBHhKI0haygT/8JQP786J0p9M7+ZQq0dhAxF0syPxSeva7eOJnVWw+Qdry4NMlWgQ==");
	testGeneration(512, "JDYrcu3M", "vkyN1uodhwWqQ8jafTTvyL9um+KWfzoXe2Jh9eNOSN0ekAwqqrnieaxZWxapuYdKlPkOF/ihWWeES52ud1jQvw==");
	testGeneration(512, "oT.L6Wmt", "gg4PfP7FwvKo+ert/40bUhXyw1Msb6l//MFmKbYqtDPZmNNedujKJi/tg9d2Dc+/PJwZg5DxDSbeuQZhU9qB/Q==");
	testGeneration(512, "hvlbuy8v", "ypt682M3neN/ovr5jbDcG32HBgm/o1g8hqUsAmKPOIpT9thvYOC3TsvW2kweX6O+JzxL9z4GNImCXIMhpijO5w==");			
});
	
test( "1024 bit key generation.", function() {
	testGeneration(1024, "Fgl-;pWo", "sUaAbQ3XCZoF55Ggj8xCko3bGfDE861NaTIkr1qb3HNSZuFtoUjvv7rBH3IUDyq8EuYirHo1N1glFE8Xywsms/p17MQDnHfwE2SR0bywRhm/isVbg4h74X9OzpxxnvH0Y8/qDzzrXUnfDiTxoAS8N5Wd09BGRxtiVyEBmFoxlRc=");
	testGeneration(1024, "9sfTPTLs", "kvwdmwvy2BYhDL7i+mQ488pNGz5lFvrAGXUxpIcDkgwHCJeMg8cSuQENOPMeQ4lLL3NWgg863VbCxyLPSTyKz3/ZThEA/UodTLEpbrG1eFioqsmHzKHfzpQpzTAGx02W/67lTG0k/42T539zDnFNymd9mlmGUxpuY8C/U35GcwU=");
	testGeneration(1024, "JDYrcu3M", "k94VzM7BN1VU5JATaaeSSLR63h7eXfANC1I1C/ub2oOUZYtqMbnxWwWiestPxQfO0cigOjM4NduhqZ8UH2UY+ZASja0zlu4a29Wcy6Et+wAG35QnB8Sz7IOaogi8QJGvATDvpuwLlaGOSv+N+hadfZsUAh/2kGEOEsqzb21QB2U=");
	testGeneration(1024, "oT.L6Wmt", "dD86tC+ojjOxWXfeKTfYw5Eoe4A5C+u5DCoislN1q8ksg6NqEE85za8ePucz391HXD8MPk6nsF+CGOEBzHuHRiT/f9mDT1u6wsNjUUeD/EDDJqDv99/8gAgO2T/RRqrI0abp+kXDyw+Xx+kmZiujD5LlewvAQWyWmAyctz1Gef8=");
	testGeneration(1024, "hvlbuy8v", "qsW+hBvXunrrADyrFKvKqhbJuOhIZYVtOW1JvWgyuFNYuUezoozsoG7ZlX7QfheE2+BJT/urcXHIhUC6L7dQ9faXGR5ESMKCy8p5qiERzuMiJ7/Cbhbe/rRKoMKqCK3QDxs+uMSnPPzxyokWr93DwbUOcwh6D6cBOS3Sk+EJ1Fk=");			
});
	
test( "2048 bit key generation.", function() {
	testGeneration(2048, "Fgl-;pWo", "Y/8KNvdp7X+vcgS6m3WDElebAOdBrQXJJm1Vc2myCNeZasfaW8NlpYhCl4pkwbfGcS9VyspAvAbQrBxG4q2mhbn1grtNR5y2m7fYvh0oYt3AdaWvHb4ACDcfdOzhVSZSA+UqvmkysaeEF1UJgsJnVCdLkIADh+4JCNpvBRDhihQFWXTAHHK7Dgh011lQsCbqD8jRGFhuBT/DD0ceuLznil6r1/jawhqccXeA4m/KbbCuFb1MJGYcft4UpUJtJqT/79yKQtPQ6YRHq6x40avczPi784Czz+27JZAmSDhaXBbP4h62K70kdTqPmFfZQ3p8nuhsMXH8qokK+kA77VNrQQ==");			
});
	
function testGeneration(bits, password, publicKey) {
	var k = cryptico.generateRSAKey(password, bits);
	var p = cryptico.publicKeyString(k);
		
	equal(p, publicKey, bits + " bits public key match for password '" + password + "'");
};