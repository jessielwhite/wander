module.exports.schedule = {
  name: 'New York City',
  day_1: [{ name: 'Channel Gardens', location: { lat: 40.7585013, lng: -73.97808700000002 } }, { /*another event*/ }],
  day_2: [{ /* another trip */ }],
}; // For individual schedule view

getSchedules = [{ name: 'City name', id: 'schedule id' }, schedule2]; // for dashboard page


module.exports.schedule2 = {

};
// module.exports.schedule1 = {
//   day_1:
//   {
//     event1:
//         {
//           "formatted_address": "New York, NY 10020, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7585013,
//               "lng": -73.97808700000002
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7598502802915,
//                 "lng": -73.97673801970851
//               },
//               "southwest": {
//                 "lat": 40.7571523197085,
//                 "lng": -73.97943598029151
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//           "id": "0129a6592c0b5edf1c7dd7923b580384d97eceb0",
//           "name": "The Channel Gardens",
//           "opening_hours": {
//             "open_now": true,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 3185,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/113065508990519248577/photos\"\u003eEli Ma\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAArTo1egrQkqZMFjJqarYERe2z8EErCiSVpVdGbM-7zTSKPt47LFQYmmNGLubzvo2StQXzO_oe0f17pp1TXPN-u3PMcKCBNlg7_uIBH6ZACBxeCOAMdnyuAVxHvk9oGiO2EhAaLLRA_lj2_-CtPEvJtn9uGhTvILex7ojT4PaxZgY6NVB-e2GCuA",
//               "width": 4779
//             }
//           ],
//           "place_id": "ChIJ5yWju_5YwokR6dgLgzNaIBw",
//           "rating": 4.6,
//           "reference": "CmRRAAAAlYvSBGV-9JK9DySJWLyDBffzE1DvGelWYN6aIDygHN7FuVJhzFaxm79ug05rztIJJhbbNPKqS6uu2FJ3g_Ezh6xEwkhGANiEiAvLKJeuYbQyfBln9pqsn-NlSu1uH-HwEhBaLh8o1wNc1MqFnjFNEs-5GhSkT62MenODzBehVKtUE2NMWwUM3w",
//           "types": [
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event2:
//         {
//           "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7794366,
//               "lng": -73.963244
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7802527302915,
//                 "lng": -73.9613772197085
//               },
//               "southwest": {
//                 "lat": 40.7775547697085,
//                 "lng": -73.9640751802915
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
//           "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
//           "name": "The Metropolitan Museum of Art",
//           "opening_hours": {
//             "open_now": false,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 3162,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/108182274217729336483/photos\"\u003eClaudio Stessens\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAbOe86XyJR1o1MEwPTXFTq4TLDVza-IrEW7aodVFlWqSYx9w1igSvTgegbkrEH8Se0gTJhm7VCtfTFJzLLm706RSCTCwuUKfgaKSBd7en-ufkp3U5BO1TLj67c9tb2pXqEhCGg0Gn0soh1MsBdpg2fMxDGhQER8srm2CGoGBykvS_6D3DLVUQbQ",
//               "width": 5058
//             }
//           ],
//           "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
//           "rating": 4.8,
//           "reference": "CmRRAAAAhE9igkWEf5gfRlJ8ZZMQKT4tXQcVZOEdPi6d_uGcn1Kyqk2VwSPJ8BrSVJ4h8WqfRMCpWqR0DlRxA1697dkukAVuxvhlhMRFP73CVtgGyfDleUDtOTiUVG5ANVlxqzxCEhD0AYO-a2AnpPNJgG4od7nGGhRukae_zmHJI63mb1WukLypeGllFw",
//           "types": [
//             "art_gallery",
//             "museum",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event3:
//         {
//           "formatted_address": "New York, NY, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7828647,
//               "lng": -73.9653551
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.81804399999999,
//                 "lng": -73.9339825
//               },
//               "southwest": {
//                 "lat": 40.74734159999999,
//                 "lng": -73.99703049999999
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//           "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
//           "name": "Central Park",
//           "opening_hours": {
//             "open_now": true,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 1836,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/116940582153112696866/photos\"\u003eChris Marzarella\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAUCGXtpDTz44ckG0fmqKoAFI_BKjivBaJlgY6GUVsjiTczFfLoa1QinrmSYaMtexr9-UMTz_WzzoQNdTkIO_3AetcGar-zfve8QzBmnSCJJaZkqJ-gSN-uerQgGQjIllMEhBqK9rXFh6d_wMv6k5i7B8jGhRTP12pQUa8ahI68OhyHDAQEd-WLw",
//               "width": 3264
//             }
//           ],
//           "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
//           "rating": 4.8,
//           "reference": "CmRSAAAAw5Zs4iT3vunyKAOC18-eG-epefDKWmuDddPUVlP9G7SfHV8mfapNRt607295CxMWPXWqIryh_Gh0aeIgPmNE6xw780SG6VwCGWeiYTkX9dHAI4h36W-S8x98j2ML3WHoEhDfHY8kT1CX_O8oYuoyWCGiGhQLSr5vQKHpcPq4x4ri5vxLKrPvfA",
//           "types": [
//             "park",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//       restaurant1: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant2: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant3: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//   },
//   day_2:
//   {
//     event1:
//         {
//           "formatted_address": "350 5th Ave, New York, NY 10118, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7484405,
//               "lng": -73.98566439999999
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7497074302915,
//                 "lng": -73.98392536970849
//               },
//               "southwest": {
//                 "lat": 40.7470094697085,
//                 "lng": -73.98662333029151
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//           "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
//           "name": "Empire State Building",
//           "opening_hours": {
//             "open_now": true,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 3024,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/117065032474483157307/photos\"\u003ePavel Drápela\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAA-EVOpk7qKL6_Vp6K5bmXr_JGVH10874qMGp1v6tUSbqIm3917YsjySp2Fj70SIMaoBYjg9eDIE-vWncdChqVASUNCNDz_X6osDp-bB0EplpH2fD5B-1vjTp6Gs4smdTVEhDoxFs9i0s3KJ407vsgnIJ_GhQ4Cc5bU0wlWNMvcROISppS9ltpwA",
//               "width": 4032
//             }
//           ],
//           "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
//           "rating": 4.6,
//           "reference": "CmRSAAAAsDCOB5iCAmqErDKdpHwKgCEUyow_CBVufXmnIhagzNrivjAfxL5fDdog9XN0xSPETxo_xQAkXv6ON8WojyWk-QxrQ5zwxqL3_pkLHMfnO7ugEK_ScxBm3PFI-G20Mn1VEhAxt_NFNGd5j9eOb9d4eJFEGhTJbh20-92l4I6FB4a-gUBQ66op9w",
//           "types": [
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event2:
//         {
//           "formatted_address": "5th Ave, New York, NY 10022, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7584653,
//               "lng": -73.97599269999999
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.75987823029149,
//                 "lng": -73.97453295
//               },
//               "southwest": {
//                 "lat": 40.7571802697085,
//                 "lng": -73.97777435
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
//           "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
//           "name": "St. Patrick's Cathedral",
//           "opening_hours": {
//             "open_now": false,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 1932,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/108591886342935475371/photos\"\u003eCesar La Paz\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAACIU9ynmiB8UJvCVg1Tr0jigq_z0oH98uksQzPS_YSCZosw0YDz1affSMFBTAfCcGfoIesFwdNld2MM6OTusRTDGXfHobdZ94LR3aYcbrVydlrHGYg9f5Zwgj2HodrkdmEhDt-w7aPp8J-qJP9ATeqnoDGhS-Ms2nD77zRNRaaD7p7Yik6Gulag",
//               "width": 2576
//             }
//           ],
//           "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
//           "price_level": 0,
//           "rating": 4.7,
//           "reference": "CmRSAAAAMTqT4J5Mf7-6ZTGG-bP9Uf9pL51wMKeg4mAnCJhT_yrpK-K0vr4dyNuAS8ZHBR9dMZIeKCs2GtfQd0YtjFONeESgn_yOF2QOZoyuT47WTT0BBxqz5lTA2IUL6e2x_kqxEhCAl7rMYO1XR6iByqIlDhQaGhQWhS15U1vWBvyOr5DL5_1SqfvPAA",
//           "types": [
//             "church",
//             "place_of_worship",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event3:
//         {
//           "formatted_address": "1260 6th Ave, New York, NY 10020, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.75997599999999,
//               "lng": -73.97997719999999
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7612802802915,
//                 "lng": -73.97879046970849
//               },
//               "southwest": {
//                 "lat": 40.7585823197085,
//                 "lng": -73.98148843029151
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//           "id": "89dd7f0c82efc14f18954f8abf2925515037927a",
//           "name": "Radio City Music Hall",
//           "photos": [
//             {
//               "height": 3480,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/117311481698482405324/photos\"\u003epaolo marchese\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAO-tNddt2kbIsXJ0r3cajs-gjCwk2NG86AINSq5m4MEEu37Pvy0dF5DgF3GBnKY842SnwdUgVGiKnjlzODeu7z0kpaBV2Ja-6EESjc2EayId3uw7hJ7V3Mdu7qkhX6xc3EhDRU2FUZ6ismrYWnIIYG6c3GhSmmASGa91_2dYwpiVPyJH1poNMew",
//               "width": 4640
//             }
//           ],
//           "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
//           "rating": 4.6,
//           "reference": "CmRSAAAATnDzQLsYODdfv41sB189plVsg-OWzw2jqPQbqOFQ_fXxwqSyDYJzlmmVQ-cO_N91bwG3Tb4eNnwXkEMFOsUlg8ma6yfXJTkSVLr50FsUx97m3Swyc6hesqg9ECTpuxDUEhAFhcPUMdz0SB5I_hIX3V2wGhSmrzfPjn56c94LTUO3nD_5tU-NBA",
//           "types": [
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event4:
//         {
//           "formatted_address": "New York, NY, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7479925,
//               "lng": -74.0047649
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7588822,
//                 "lng": -73.9986873
//               },
//               "southwest": {
//                 "lat": 40.73290899999999,
//                 "lng": -74.01141530000002
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//           "id": "72dc79d023feec77725d7336e7c46fee27805319",
//           "name": "The High Line",
//           "opening_hours": {
//             "open_now": false,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 2448,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/105437309790505723829/photos\"\u003eNicolò Bertasi\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAihXOMZNB3mKTjLsq2GCcZMynyzqHh4jpRVKEPNuBdIa66OM6bQ79lXsAO_Nd3EiVsf1iXExppH74IdxjmJ1uHCEgk8QfhYWJz6GIb1puEJvVuwRka1nwEEt43ZKrkvfFEhD23A9j7DxZvh6rtbv1d6AcGhRZYBtyid_PDRVPqsVsAbsxXI0K5g",
//               "width": 3264
//             }
//           ],
//           "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
//           "rating": 4.7,
//           "reference": "CmRRAAAAhkjRi9ilsayq_mXXK1BVoNyVV-EIn-x6t0PizaqfbSJ2isaDewKUw2IaP0JKIpKUTYHYJ-YuVcv9xyRLBXpYOahB7ztSaonj2TofGY6W5ExfduYovRUhivCm1vilqOJ-EhBzqCQW1ayLy1lfwUedIth3GhQQMTgMHW8LiJuOFeW852o4aOP7Cw",
//           "types": [
//             "park",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
    
//       restaurant1: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant2: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant3: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//   },
// };

// module.exports.schedule2 = {
//   day_1:
//   {
//     event1:
//         {
//           "formatted_address": "New York, NY 10020, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7585013,
//               "lng": -73.97808700000002
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7598502802915,
//                 "lng": -73.97673801970851
//               },
//               "southwest": {
//                 "lat": 40.7571523197085,
//                 "lng": -73.97943598029151
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//           "id": "0129a6592c0b5edf1c7dd7923b580384d97eceb0",
//           "name": "The Channel Gardens",
//           "opening_hours": {
//             "open_now": true,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 3185,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/113065508990519248577/photos\"\u003eEli Ma\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAArTo1egrQkqZMFjJqarYERe2z8EErCiSVpVdGbM-7zTSKPt47LFQYmmNGLubzvo2StQXzO_oe0f17pp1TXPN-u3PMcKCBNlg7_uIBH6ZACBxeCOAMdnyuAVxHvk9oGiO2EhAaLLRA_lj2_-CtPEvJtn9uGhTvILex7ojT4PaxZgY6NVB-e2GCuA",
//               "width": 4779
//             }
//           ],
//           "place_id": "ChIJ5yWju_5YwokR6dgLgzNaIBw",
//           "rating": 4.6,
//           "reference": "CmRRAAAAlYvSBGV-9JK9DySJWLyDBffzE1DvGelWYN6aIDygHN7FuVJhzFaxm79ug05rztIJJhbbNPKqS6uu2FJ3g_Ezh6xEwkhGANiEiAvLKJeuYbQyfBln9pqsn-NlSu1uH-HwEhBaLh8o1wNc1MqFnjFNEs-5GhSkT62MenODzBehVKtUE2NMWwUM3w",
//           "types": [
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event2:
//         {
//           "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7794366,
//               "lng": -73.963244
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7802527302915,
//                 "lng": -73.9613772197085
//               },
//               "southwest": {
//                 "lat": 40.7775547697085,
//                 "lng": -73.9640751802915
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
//           "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
//           "name": "The Metropolitan Museum of Art",
//           "opening_hours": {
//             "open_now": false,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 3162,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/108182274217729336483/photos\"\u003eClaudio Stessens\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAbOe86XyJR1o1MEwPTXFTq4TLDVza-IrEW7aodVFlWqSYx9w1igSvTgegbkrEH8Se0gTJhm7VCtfTFJzLLm706RSCTCwuUKfgaKSBd7en-ufkp3U5BO1TLj67c9tb2pXqEhCGg0Gn0soh1MsBdpg2fMxDGhQER8srm2CGoGBykvS_6D3DLVUQbQ",
//               "width": 5058
//             }
//           ],
//           "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
//           "rating": 4.8,
//           "reference": "CmRRAAAAhE9igkWEf5gfRlJ8ZZMQKT4tXQcVZOEdPi6d_uGcn1Kyqk2VwSPJ8BrSVJ4h8WqfRMCpWqR0DlRxA1697dkukAVuxvhlhMRFP73CVtgGyfDleUDtOTiUVG5ANVlxqzxCEhD0AYO-a2AnpPNJgG4od7nGGhRukae_zmHJI63mb1WukLypeGllFw",
//           "types": [
//             "art_gallery",
//             "museum",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event3:
//         {
//           "formatted_address": "New York, NY, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7828647,
//               "lng": -73.9653551
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.81804399999999,
//                 "lng": -73.9339825
//               },
//               "southwest": {
//                 "lat": 40.74734159999999,
//                 "lng": -73.99703049999999
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//           "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
//           "name": "Central Park",
//           "opening_hours": {
//             "open_now": true,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 1836,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/116940582153112696866/photos\"\u003eChris Marzarella\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAUCGXtpDTz44ckG0fmqKoAFI_BKjivBaJlgY6GUVsjiTczFfLoa1QinrmSYaMtexr9-UMTz_WzzoQNdTkIO_3AetcGar-zfve8QzBmnSCJJaZkqJ-gSN-uerQgGQjIllMEhBqK9rXFh6d_wMv6k5i7B8jGhRTP12pQUa8ahI68OhyHDAQEd-WLw",
//               "width": 3264
//             }
//           ],
//           "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
//           "rating": 4.8,
//           "reference": "CmRSAAAAw5Zs4iT3vunyKAOC18-eG-epefDKWmuDddPUVlP9G7SfHV8mfapNRt607295CxMWPXWqIryh_Gh0aeIgPmNE6xw780SG6VwCGWeiYTkX9dHAI4h36W-S8x98j2ML3WHoEhDfHY8kT1CX_O8oYuoyWCGiGhQLSr5vQKHpcPq4x4ri5vxLKrPvfA",
//           "types": [
//             "park",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//       restaurant1: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant2: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant3: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//   },
//   day_2:
//   {
//     event1:
//         {
//           "formatted_address": "350 5th Ave, New York, NY 10118, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7484405,
//               "lng": -73.98566439999999
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7497074302915,
//                 "lng": -73.98392536970849
//               },
//               "southwest": {
//                 "lat": 40.7470094697085,
//                 "lng": -73.98662333029151
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//           "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
//           "name": "Empire State Building",
//           "opening_hours": {
//             "open_now": true,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 3024,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/117065032474483157307/photos\"\u003ePavel Drápela\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAA-EVOpk7qKL6_Vp6K5bmXr_JGVH10874qMGp1v6tUSbqIm3917YsjySp2Fj70SIMaoBYjg9eDIE-vWncdChqVASUNCNDz_X6osDp-bB0EplpH2fD5B-1vjTp6Gs4smdTVEhDoxFs9i0s3KJ407vsgnIJ_GhQ4Cc5bU0wlWNMvcROISppS9ltpwA",
//               "width": 4032
//             }
//           ],
//           "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
//           "rating": 4.6,
//           "reference": "CmRSAAAAsDCOB5iCAmqErDKdpHwKgCEUyow_CBVufXmnIhagzNrivjAfxL5fDdog9XN0xSPETxo_xQAkXv6ON8WojyWk-QxrQ5zwxqL3_pkLHMfnO7ugEK_ScxBm3PFI-G20Mn1VEhAxt_NFNGd5j9eOb9d4eJFEGhTJbh20-92l4I6FB4a-gUBQ66op9w",
//           "types": [
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event2:
//         {
//           "formatted_address": "5th Ave, New York, NY 10022, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7584653,
//               "lng": -73.97599269999999
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.75987823029149,
//                 "lng": -73.97453295
//               },
//               "southwest": {
//                 "lat": 40.7571802697085,
//                 "lng": -73.97777435
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
//           "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
//           "name": "St. Patrick's Cathedral",
//           "opening_hours": {
//             "open_now": false,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 1932,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/108591886342935475371/photos\"\u003eCesar La Paz\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAACIU9ynmiB8UJvCVg1Tr0jigq_z0oH98uksQzPS_YSCZosw0YDz1affSMFBTAfCcGfoIesFwdNld2MM6OTusRTDGXfHobdZ94LR3aYcbrVydlrHGYg9f5Zwgj2HodrkdmEhDt-w7aPp8J-qJP9ATeqnoDGhS-Ms2nD77zRNRaaD7p7Yik6Gulag",
//               "width": 2576
//             }
//           ],
//           "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
//           "price_level": 0,
//           "rating": 4.7,
//           "reference": "CmRSAAAAMTqT4J5Mf7-6ZTGG-bP9Uf9pL51wMKeg4mAnCJhT_yrpK-K0vr4dyNuAS8ZHBR9dMZIeKCs2GtfQd0YtjFONeESgn_yOF2QOZoyuT47WTT0BBxqz5lTA2IUL6e2x_kqxEhCAl7rMYO1XR6iByqIlDhQaGhQWhS15U1vWBvyOr5DL5_1SqfvPAA",
//           "types": [
//             "church",
//             "place_of_worship",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event3:
//         {
//           "formatted_address": "1260 6th Ave, New York, NY 10020, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.75997599999999,
//               "lng": -73.97997719999999
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7612802802915,
//                 "lng": -73.97879046970849
//               },
//               "southwest": {
//                 "lat": 40.7585823197085,
//                 "lng": -73.98148843029151
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
//           "id": "89dd7f0c82efc14f18954f8abf2925515037927a",
//           "name": "Radio City Music Hall",
//           "photos": [
//             {
//               "height": 3480,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/117311481698482405324/photos\"\u003epaolo marchese\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAO-tNddt2kbIsXJ0r3cajs-gjCwk2NG86AINSq5m4MEEu37Pvy0dF5DgF3GBnKY842SnwdUgVGiKnjlzODeu7z0kpaBV2Ja-6EESjc2EayId3uw7hJ7V3Mdu7qkhX6xc3EhDRU2FUZ6ismrYWnIIYG6c3GhSmmASGa91_2dYwpiVPyJH1poNMew",
//               "width": 4640
//             }
//           ],
//           "place_id": "ChIJPS8b1vhYwokRldqq2YHmxJI",
//           "rating": 4.6,
//           "reference": "CmRSAAAATnDzQLsYODdfv41sB189plVsg-OWzw2jqPQbqOFQ_fXxwqSyDYJzlmmVQ-cO_N91bwG3Tb4eNnwXkEMFOsUlg8ma6yfXJTkSVLr50FsUx97m3Swyc6hesqg9ECTpuxDUEhAFhcPUMdz0SB5I_hIX3V2wGhSmrzfPjn56c94LTUO3nD_5tU-NBA",
//           "types": [
//             "point_of_interest",
//             "establishment"
//           ]
//         },
//     event4:
//         {
//           "formatted_address": "New York, NY, United States",
//           "geometry": {
//             "location": {
//               "lat": 40.7479925,
//               "lng": -74.0047649
//             },
//             "viewport": {
//               "northeast": {
//                 "lat": 40.7588822,
//                 "lng": -73.9986873
//               },
//               "southwest": {
//                 "lat": 40.73290899999999,
//                 "lng": -74.01141530000002
//               }
//             }
//           },
//           "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
//           "id": "72dc79d023feec77725d7336e7c46fee27805319",
//           "name": "The High Line",
//           "opening_hours": {
//             "open_now": false,
//             "weekday_text": []
//           },
//           "photos": [
//             {
//               "height": 2448,
//               "html_attributions": [
//                 "\u003ca href=\"https://maps.google.com/maps/contrib/105437309790505723829/photos\"\u003eNicolò Bertasi\u003c/a\u003e"
//               ],
//               "photo_reference": "CmRaAAAAihXOMZNB3mKTjLsq2GCcZMynyzqHh4jpRVKEPNuBdIa66OM6bQ79lXsAO_Nd3EiVsf1iXExppH74IdxjmJ1uHCEgk8QfhYWJz6GIb1puEJvVuwRka1nwEEt43ZKrkvfFEhD23A9j7DxZvh6rtbv1d6AcGhRZYBtyid_PDRVPqsVsAbsxXI0K5g",
//               "width": 3264
//             }
//           ],
//           "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
//           "rating": 4.7,
//           "reference": "CmRRAAAAhkjRi9ilsayq_mXXK1BVoNyVV-EIn-x6t0PizaqfbSJ2isaDewKUw2IaP0JKIpKUTYHYJ-YuVcv9xyRLBXpYOahB7ztSaonj2TofGY6W5ExfduYovRUhivCm1vilqOJ-EhBzqCQW1ayLy1lfwUedIth3GhQQMTgMHW8LiJuOFeW852o4aOP7Cw",
//           "types": [
//             "park",
//             "point_of_interest",
//             "establishment"
//           ]
//         },
    
//       restaurant1: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant2: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//       restaurant3: {
//         "restaurant": {
//           "R": {
//             "res_id": 17244575
//           },
//           "apikey": "0cae7c1f9c26610b03bd4ee152340b02",
//           "id": "17244575",
//           "name": "New York Pizza",
//           "url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "location": {
//             "address": "4418 Magazine St, New Orleans 70115",
//             "locality": "Uptown",
//             "city": "New Orleans",
//             "city_id": 290,
//             "latitude": "29.9206670000",
//             "longitude": "-90.1020540000",
//             "zipcode": "70115",
//             "country_id": 216,
//             "locality_verbose": "Uptown, New Orleans"
//           },
//           "switch_to_order_menu": 0,
//           "cuisines": "Italian, Pizza",
//           "average_cost_for_two": 25,
//           "price_range": 2,
//           "currency": "$",
//           "offers": [],
//           "thumb": "",
//           "user_rating": {
//             "aggregate_rating": "3.3",
//             "rating_text": "Average",
//             "rating_color": "CDD614",
//             "votes": "224"
//           },
//           "photos_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
//           "menu_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
//           "featured_image": "",
//           "has_online_delivery": 0,
//           "is_delivering_now": 0,
//           "deeplink": "zomato://restaurant/17244575",
//           "has_table_booking": 0,
//           "events_url": "https://www.zomato.com/new-orleans/new-york-pizza-new-orleans/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
//           "establishment_types": []
//         } },
//   },
// };
