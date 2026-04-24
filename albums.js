const albums = [

{
title: "Cloud 9",
artist: "Megan Moroney",
cover: "album1.jpg",
score: 4.20,
tracks: 15,
reviewDate: "2026-02-24T00:00:00",
releaseDate: "2026-02-20T00:00:00",
genre: ["Country"],
link: "album1.html"
},

{
title: "OCTANE",
artist: "Don Toliver",
cover: "album2.jpg",
score: 3.22,
tracks: 18,
reviewDate: "2026-02-25T00:00:00",
releaseDate: "2026-01-30T00:00:00",
genre: ["Alternative", "Hip-Hop", "Rap"],
link: "album2.html"
},

{
title: "Eternal Atake",
artist: "Lil Uzi Vert",
cover: "album3.jpg",
score: 3.44,
tracks: 18,
reviewDate: "2026-02-26T00:00:00",
releaseDate: "2020-03-06T00:00:00",
genre: ["Hip-Hop", "Rap"],
link: "album3.html"
},

{
title: "The Romantic",
artist: "Bruno Mars",
cover: "album4.jpg",
score: 2.56,
tracks: 9,
reviewDate: "2026-02-27T00:00:00",
releaseDate: "2026-02-27T00:00:00",
genre: ["R&B", "Soul"],
link: "album4.html"
},

{
title: "Kiss All The Time. Disco, Occasionally.",
artist: "Harry Styles",
cover: "album5.jpg",
score: 1.08,
tracks: 12,
reviewDate: "2026-03-10T00:00:00",
releaseDate: "2026-03-06T00:00:00",
genre: ["Pop"],
link: "album5.html"
},

{
title: "Man's Best Friend (Bonus Track)",
artist: "Sabrina Carpenter",
cover: "album6.jpg",
score: 3.15,
tracks: 13,
reviewDate: "2026-03-12T00:00:00",
releaseDate: "2025-12-24T00:00:00",
genre: ["Pop"],
link: "album6.html"
},

{
title: "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE",
artist: "Metro Boomin",
cover: "album7.jpg",
score: 3.23,
tracks: 13,
reviewDate: "2026-03-12T00:00:00",
releaseDate: "2023-06-02T00:00:00",
genre: ["Hip-Hop", "Rap"],
link: "album7.html"
},

{
title: "forgive, forget. [EP]",
artist: "Avery Anna",
cover: "album8.jpg",
score: 3.67,
tracks: 6,
reviewDate: "2026-03-17T00:00:00",
releaseDate: "2026-03-13T00:00:00",
genre: ["Country"],
link: "album8.html"
},

{
title: "MUSIC-SORRY 4 DA WAIT",
artist: "Playboi Carti",
cover: "album9.jpg",
score: 1.82,
tracks: 34,
reviewDate: "2026-03-17T00:00:00",
releaseDate: "2025-03-25T00:00:00",
genre: ["Hip-Hop", "Trap", "Rap"],
link: "album9.html"
},

{
title: "Lavender Days",
artist: "Caamp",
cover: "album10.jpg",
score: 4.00,
tracks: 12,
reviewDate: "2026-03-18T00:00:00",
releaseDate: "2022-06-24T00:00:00",
genre: ["Folk", "Alternative"],
link: "album10.html"
},

{
title: "The Way I Am",
artist: "Luke Combs",
cover: "album11.jpg",
score: 4.36,
tracks: 22,
reviewDate: "2026-03-24T00:00:00",
releaseDate: "2026-03-20T00:00:00",
genre: ["Country"],
link: "album11.html"
},

{
title: "HIT ME HARD AND SOFT",
artist: "Billie Eilish",
cover: "album12.jpg",
score: 4.60,
tracks: 10,
reviewDate: "2026-03-26T00:00:00",
releaseDate: "2024-05-17T00:00:00",
genre: ["Pop"],
link: "album12.html"
},

{
title: "Barbie The Album",
artist: "Various Artists",
cover: "album13.jpg",
score: 3.41,
tracks: 17,
reviewDate: "2026-03-26T00:00:00",
releaseDate: "2023-07-21T00:00:00",
genre: ["Pop", "Folk", "Rock"],
link: "album13.html"
},

{
title: "Work of Heart",
artist: "Flatland Cavalry",
cover: "album14.jpg",
score: 4.17,
tracks: 12,
reviewDate: "2026-03-31T00:00:00",
releaseDate: "2026-03-27T00:00:00",
genre: ["Folk", "Country"],
link: "album14.html"
},

{
title: "BULLY",
artist: "Kanye West",
cover: "album15.jpg",
score: 2.06,
tracks: 18,
reviewDate: "2026-03-31T00:00:00",
releaseDate: "2026-03-28T00:00:00",
genre: ["Hip Hop", "Rap"],
link: "album15.html"
},

{
title: "Broken View",
artist: "Sam Barber",
cover: "album16.jpg",
score: 3.62,
tracks: 13,
reviewDate: "2026-04-07T00:00:00",
releaseDate: "2026-04-03T00:00:00",
genre: ["Folk", "Country"],
link: "album16.html"
},

{
title: "Dandelion",
artist: "Ella Langley",
cover: "album17.jpg",
score: 3.78,
tracks: 18,
reviewDate: "2026-04-13T00:00:00",
releaseDate: "2026-10-T00:00:00",
genre: ["Pop", "Country"],
link: "album17.html"
},

{
title: "CTRL ESCAPE",
artist: "John Summit",
cover: "album18.jpg",
score: 2.69,
tracks: 13,
reviewDate: "2026-04-15T00:00:00",
releaseDate: "2026-04-15T00:00:00",
genre: ["Dance", "Electronic", "EDM"],
link: "album18.html"
},

{
title: "With Heaven On Top",
artist: "Zach Bryan",
cover: "album19.jpg",
score: 3.40,
tracks: 25,
reviewDate: "2026-04-21T00:00:00",
releaseDate: "2026-01-09T00:00:00",
genre: ["Country", "Folk"],
link: "album19.html"
},

{
title: "Deep Water [EP]",
artist: "Cameron Whitcomb",
cover: "album20.jpg",
score: 4.60,
tracks: 5,
reviewDate: "2026-04-21T00:00:00",
releaseDate: "2026-04-17T00:00:00",
genre: ["Alternative", "Country"],
link: "album20.html"
},

{
title: "The Great Divide",
artist: "Noah Kahan",
cover: "album21.jpg",
score: 5.00,
tracks: 17,
reviewDate: "2026-04-24T00:00:00",
releaseDate: "2026-04-24T00:00:00",
genre: ["Alternative", "Folk"],
link: "album21.html"
}
];