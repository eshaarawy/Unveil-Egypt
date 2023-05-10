// TEXT data
const historical = [{
	bold: "The Pyramids of Giza and Sphinx:",
	text: "Located in the Giza plateau on the outskirts of Cairo."
}, {
	bold: "The Egyptian Museum:",
	text: "Located in Tahrir Square in central Cairo."
}, {
	bold: "Salah El-Din Citadel:",
	text: "Located on a hill Islamic Cairo overlooking the city."
}, {
	bold: "The Cairo Tower:",
	text: "Located in Zamalek, a tall tower with panoramic views of the city."
}, {
	bold: "Bab Zuweila:",
	text: "Located in Islamic Cairo, one of the ancient gates to the city."
}, {
	bold: "The city of the Dead:",
	text: "Located in the northeastern part of cairo, a historic cemetery and necropolis."
}
];
const souv = [{
	bold: "Khan El Khalili:",
	text: "It is a historic souk, or market. It is known for its narrow streets and winding alleys, where vendors sell a wide variety of goods, including jewelry,  spices, textiles, and souvenirs.",
	location: ""
}, {
	bold: "The Mena House Oberoi Hotel:",
	text: " a historic hotel located on the Giza plateau, with views of the Great Pyramids of Giza. The hotel offers Nile River cruises aboard its private dahabiya, a traditional Egyptian sailing boat.",
	location: "Located on Gezira Island in the middle of the Nile River."
}, {
	bold: "Souq El Gomaa:",
	text: "Souq El Gomaa is a weekly flea market located in the El-Ataba neighborhood of Cairo. It takes place every Friday and is a great place to find unique, handmade items, as well as secondhand goods and antiques.",
	location: "Located in Sayeda Zeinab neighborhood of Cairo."
}, {
	bold: "Al Azhar Street:",
	text: "Al Azhar Street is a busy shopping district located in Islamic Cairo. It features a wide variety of shops selling everything from clothing and accessories to spices and souvenirs.",
	location: "Located in the southeastern part of the city."
}
];

const traditional = [{
	bold: "Hoda Shaarawi:",
	text: "A historic restaurant that serves traditional Egyptian dishes, including stuffed pigeon, molokhia, and grilled meat kebabs.",
	location: "Location: 10 El Batal Ahmed Abdel Aziz St, Al Dokki, Giza."
}, {
	bold: "Abu Shakra:",
	text: "A popular restaurant that specializes in traditional Egyptian grilled meat dishes, such as kofta and shish tawouk, as well as mezzes and salads.",
	location: "Location: Multiple locations, including Zamalek, Mohandiseen, and Heliopolis."
}, {
	bold: "Abou El Sid:",
	text: "A restaurant that serves authentic Egyptian cuisine, including slow-cooked meat dishes and traditional mezzes.",
	location: "Location: 157 26th of July St, Zamalek, Cairo."
}, {
	bold: "Koshary Abou Tarek:",
	text: "A famous restaurant that serves the quintessential Egyptian dish of koshary, made with pasta, lentils, rice, chickpeas, and tomato sauce.",
	location: "Location: 16 Adly St, Downtown Cairo."
}
];

const fancy = [
	{
		bold: "L'Oriental:",
		text: "A fine dining restaurant that offers a fusion of Moroccan, Lebanese, and Syrian cuisine.",
		location: "Location: Zamalek, Cairo."
	}, {
		bold: "Zitouni:",
		text: "A gourmet Egyptian restaurant that offers modern twists on traditional dishes.",
		location: "Location: Four Seasons Hotel Cairo at Nile Plaza, Downtown Cairo."
	}, {
		bold: "Kazoku:",
		text: "A modern Japanese restaurant that offers sushi, noodles, and other Japanese dishes.",
		location: "Location: Heliopolis, Cairo."
	}, {
		bold: "Pane Vino:",
		text: "An Italian restaurant that offers authentic Italian cuisine and a great wine selection.",
		location: "Location: Maadi, Cairo."
	}, {
		bold: "Birdcage:",
		text: "A chic restaurant that serves a fusion of Chinese and Thai cuisine.",
		location: "Location: Zamalek, Cairo."
	}
];

const religious = [
	{
		bold: "Al-Azhar Mosque:",
		text: "It is one of the oldest and most important mosques in Egypt, and is also home to Al-Azhar University.",
		location: "Located in the heart of Islamic Cairo on Al-Azhar Street."
	}, {
		bold: "Mosque of Ibn Tulun:",
		text: "It is one of the oldest mosques in Egypt, dating back to the 9th century. It features a unique spiral minaret and a large courtyard.",
		location: "Located in the Sayyida Zeinab neighborhood of Cairo"
	}, {
		bold: "Hanging Church:",
		text: "It is one of the oldest churches in Egypt. It is known for its beautiful architecture and arnate decorations.",
		location: "Located in the Coptic Christian neighborhood of Cairo"
	}, {
		bold: "Ben Ezra Synagogue:",
		text: "It is one of the oldest synagogues in Egypt, dating back to the 9th century. It has a rich history and is known for its beautiful architecture.",
		location: "Located in Cairo"
	}
];

const park = [
	{
		bold: "Al-Azhar Park:",
		text: "It features gardens, fountains, and stunning views of the city. The park is open daily from 9 am to 10 pm.",
		location: "Located in Islamic Cairo"
	}, {
		bold: "Giza Zoo:",
		text: "It features a wide variety of animals, including lions, tigers, and elephants, as well as gardens and picnic areas. The zoo is open daily from 9 am to 5 pm.",
		location: "Located in the Giza neighborhood of Cairo."
	}, {
		bold: "Gezira Park:",
		text: "It features gardens, fountains, and walking paths, as well as several museums and cultural centers. The park is open daily from 8 am to 10 pm.",
		location: "Located on an island in the Nile River, between downtown Cairo and the Giza neighborhood."
	}, {
		bold: "Family Park:",
		text: "It features playgrounds, sports facilities, and picnic areas, as well as a lake with paddle boats. The park is open daily from 9 am to 10 pm.",
		location: "Located in the Nasr City neighborhood of Cairo."
	}
];

const nile = [
	{
		bold: "Cairo Tower:",
		text: "It offers panoramic views of the city and the river, and many Nile River cruises depart from the nearby pier.",
		location: "Located on Gezira Island in the middle of the Nile River located in the heart of Islamic Cairo on Al-Azhar Street"
	}, {
		bold: "Felucca Rides:",
		text: "a traditional wooden sailboat that has been used on the Nile River for thousands of years.",
		location: "Located on Gezira Island in the middle of the Nile River located in Nile Corniche in Cairo, or from the island of Zamalek"
	}, {
		bold: "The Mena House Oberoi Hotel:",
		text: "a historic hotel located on the Giza plateau, with views of the Great Pyramids of Giza. The hotel offers Nile River cruises aboard its private dahabiya, a traditional Egyptian sailing boat.",
		location: "Located on Gezira Island in the middle of the Nile River"
	}, {
		bold: "The Four Seasons Hotel Cairo at Nile Plaza:",
		text: "The Four Seasons Hotel Cairo at Nile Plaza is a luxury hotel located in downtown Cairo, overlooking the Nile River. The hotel offers a variety of Nile River cruises aboard its private yacht, including sunset cruises and private dinner cruises.",
		location: "Located on Gezira Island in the middle of the Nile River"
	}
];

const folk = [
	{
		bold: "Wekalet El Ghouri Arts Centre:",
		text: "it offers daily folkloric dance shows, including tanoura and belly dancing.",
		location: "Located in Islamic Cairo"
	}, {
		bold: "Makan:",
		text: "It offers regular performances of traditional music, including Sufi music, as well as dance and theater shows.",
		location: "Located in the Sayyida Zeinab neighborhood of Cairo"
	}, {
		bold: "Fustat Traditional Crafts Center:",
		text: "It offers regular performances of traditional music and dance, as well as workshops and exhibitions on traditional crafts.",
		location: "Located in Old Cairo"
	}, {
		bold: "El Dina Wi Bassem:",
		text: "It is a popular restaurant and nightclub It offers nightly entertainment, including live music, belly dancing, and folkloric dance shows.",
		location: "Located in the Mohandiseen neighborhood of Cairo."
	}
];

const fast = [
	{
		bold: "McDonald's:",
		text: "",
		location: "Located in Zamalek, Downtown Cairo, Heliopolis, Nasr City, Maadi, 6th of October City, and more."
	}, {
		bold: "KFC:",
		text: "",
		location: "Located in Zamalek, Downtown Cairo, Heliopolis, Nasr City, Maadi, 6th of October City, and more."
	}, {
		bold: "Burger King:",
		text: "",
		location: "Located in Zamalek, Heliopolis, Nasr City, 6th of October City, and more."
	}, {
		bold: "Pizza Hut:",
		text: "",
		location: "Located in Zamalek, Heliopolis, Nasr City, Maadi, 6th of October City, and more."
	}, {
		bold: "Hardee's:",
		text: "",
		location: "Located in Zamalek, Downtown Cairo, Heliopolis, Nasr City, Maadi, 6th of October City, and more."
	}, {
		bold: "Subway:",
		text: "",
		location: "Located in Zamalek, Downtown Cairo, Heliopolis, Nasr City, Maadi, 6th of October City, and more."
	}, {
		bold: "Pizza Inn:",
		text: "",
		location: "Located in Heliopolis, Nasr City, Maadi, 6th of October City, and more."
	}
];

module.exports = {
  historical,
  souv,
  traditional,
  fancy,
  religious,
  park,
  nile,
  folk,
  fast
};
