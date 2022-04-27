import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.less']
})
export class PlaceDetailsComponent implements OnInit {


  place_details = [ {
    id: 0, 
    place_id: '1',
    place_image: '../../assets/shillong.png',
    place_name: 'Shillong',
    place_state: 'Meghalaya',
    access: 'By Road – Should you choose to take the road to Shillong, know that the drive is absolutely beautiful. But your journey will commence from Guwahati, via National Highway 40. The journey is approximately 2 hours and 46 minutes. You can opt to self-drive or hire a private taxi/shared cab. There are government operated deluxe buses from MTC and ASTC that ply regularly too. By Rail – If you’re looking to take the train, you will have to avail of one that goes to Guwahati Railway Station. Located 100 km away, it the closest railway head to Shillong. And don’t worry, it is well connected to major cities in India such as Mumbai and Delhi. Upon arrival, you can book a taxi to Shillong.',
    language: 'Don Bosco Museum offers insight into the fascinating indigenous culture of Shillong. One of Shillong’s famous places, history connoisseurs and art enthusiasts will be particularly delighted. The complex is equipped with 17 art galleries that house handicrafts, artefacts, clothing, ornaments and weapons used by several North-east Indian tribes.Police Bazar is a vibrant market that perfectly blends modern with medieval. Bustling with shops, hotels and eateries, there is a lot of fun, finery and food to be discovered ! Peruse through the elegant local textiles, fabrics and weaves. Don’t miss out on the opportunity to buy the gooey jams and jellies made out of Sohiong, Pineapple and peaches.sJadoh is a quaint little café that offers authentic Khasi delicacies. With plenty of vegetarian and non-vegetarian options, you can pick and choose the dish that calls out to you. However, we recommend the smoky beef curry, glazed pork with black sesame seeds, raw fish and tomato chutney. You can even try the combo meals that offer rice, vegetables, meat curry, salad and chutney. ',
    best_time: 'Shillong is beautiful throughout the year. However, you must make the important decision regarding when to travel. And so, we have provided a break up for each season. Summers are a particularly lovely time to explore Shillong. From March to June, temperatures fluctuate between 15 and 26 degrees, creating the perfect atmosphere for sightseeing and adventure sports. When it comes to the monsoons, the entire hill station glistens with crystal drops. June to September witnesses temperatures averaging 19 to 25 degrees. Although the rainfall can be incessant, this is the best time to avail off cheap air tickets and accommodation. Winters infuse the air with a frost and chill, dropping down to almost 5 degrees. October to February is a delightful time for honeymooners, as they can cosy up in woollens and sip hot tea. '
  },
  {
    id: 1, 
    place_id: '1',
    place_image: '../../assets/Shimla.png',
    place_name: 'Shimla',
    place_state: 'Himachal Pradesh',
    access: 'By Air:Jabarhatti, 22 kilometres from Shimla is where the nearest airport was located. However, due to altitude and load restrictions, commercial planes no longer operate to and from here. Chandigarh, at a distance of 115 kilometres, is the next nearest airport to Shimla.By Road: Shimla is easily accessible by road and makes for a great drive from nearby Delhi (340 kilometres) and Chandigarh (115 kilometres). Public buses run by Himachal Road Transport Corporation and private taxis ply frequently from nearby towns and cities.By Train:The toy train from Kalka to Shimla is a charming way to get to the hill station. Kalka is connected by several trains from Delhi and Chandigarh. The Kalka Shatabdi Express from New Delhi Railway Station to Kalka Railway Station takes 4 hours 10 minutes and is the fastest train plying the route.',
    language: 'Hike up Jhakoo Hill: Well worth the 30 minutes and a few mischievous monkeys en route, a hike up Jhakoo Hill takes you on a trail through lush forest terrain. At an altitude of 2,455 metres, the climb ends at a plateau where the Jhakoo Temple dedicated to Lord Hanuman stands.  From atop, feast your eyes on splendid views of the Shivalik mountain range.',
    best_time: 'Shimla is a popular hill station all through the year with three distinct seasons.    March to June: These are the summer months in Shimla with temperatures averaging 25C. June is the hottest month that sees temperatures peaking 30C. July to October: This is the monsoon season in Shimla with August being the wettest month. November to February: These are winter months in Shimla and the air is crisp and cold. Shimla also sees snowfall in December, making it a winter wonderland.'
  },
  {
    id: 2, 
    place_id: '2',
    place_image: '../../assets/Chitrakoot Falls.png',
    place_name: 'Chitrakoot Falls',
    place_state: 'Jagdalpur',
    access: 'The nearest airport to Chitrakoot Falls is in Raipur, the capital city of Chhattisgarh. The airport stands at a distance of 284km from Chitrakoot and can be reached in approximately 5 hours taking a hired taxi.',
    language: 'Skim through any mid-school geography books and Chitrakoot Falls finds a mention as the Niagara Falls of India. Now what makes a distant waterfall in the Bastar District of Chattisgarh so desirable that it\'s named after one of the most stunning sites in the world?    ',
    best_time: 'The best time to visit this majestic waterfall in the heart of the wilderness of Chattisgarh is from July to October when the Indravati River unleashes its full force. The water carries a massive amount of silt but it\'s still a spectacle for visitors. October to February remains the best time for photographers and nature lovers who wish to see a clearer and white waterfall.'
  },
  {
    id: 3, 
    place_id: '2',
    place_image: '../../assets/pangong.png',
    place_name: 'Pangong Lake',
    place_state: 'TSO lake',
    access: 'While several high mountain passes remain closed in winter, the Indian Army keeps the road through Chang La pass open all year round. This means Pangong Lake can be visited throughout the year. You will have to do adequate preparations for the harsh winter as well as get necessary security clearances as well.',
    language: 'There are enough travel agents in Leh offering tours to Pangong Lake. Tourists can choose to do bookings after reaching Leh, and thus save money by negotiating tour prices. For solo or independent travellers, hiring a taxi from Leh to Pangong Lake is a good option for a one-day return trip.',
    best_time: 'Ideally, a trip to Pangong Lake is reserved for a day outing from Leh; some tourists prefer an overnight stay to enjoy the star-lit sky at night and a sunrise in the morning. Also, Pangong Lake can also be a part of a broader itinerary featuring the Nubra Valley (Khardung La, Hunder, Diskit, Turtuk) or Tso Moriri. Foreigners are not permitted to visit Tso Moriri from Pangong Lake through Chushul, they must go via the traditional road via Chumathang.'
  },
  {
    id: 4, 
    place_id: '3',
    place_image: '../../assets/Pondicherry.png',
    place_name: 'Pondicherry',
    place_state: 'Puducherry',
    access: 'This is the first thing you need to know about visiting Pondicherry. If you are planning to reach by air, there is no direct flight that connects Pondicherry with other parts of the country. So, you need to go to Chennai by flight and take a bus or cab from Chennai to Pondicherry. There are also flights to Bangalore and Hyderabad from where you can take a connected taxi. If you have time, you can travel by train too and reach Villupuram. The popular trains are Nagercoil Express and Pondicherry Express.    ',
    language: 'In many South Indian states, people often complain of understanding the accent of the locals and face problems. In Pondicherry, you won’t have any such problems. As this town was a French Colony for a long period, people still talk in French here and English is also popular. Among the local languages, Tamil, Malayalam, Telegu, etc. are common. You don’t need to know the local language if you can talk in English.    ',
    best_time: 'Whenever you visit any new place, you need to know the best time to visit it so that your vacation won’t get ruined. Visiting Pondicherry is no exception to that. The best time to visit this beautiful town is at the monsoon and winter. You can plan your vacation from November to March when the temperature is soothing and it is within the range of 17 to 35 degrees Celsius. Try to avoid Pondicherry during summer as the sun is scorching and the temperature goes more than 40 degrees Celsius.    ',
  },
  {
    id: 5, 
    place_id: '3',
    place_image: '../../assets/kodiakanal.png',
    place_name: 'Kodiakanal',
    place_state: 'Tamil Nadu',
    access: 'A prominent hill station of South India, Kodaikanal can be easily reached from a host of cities. While Madurai is the nearest city located at a distance of 120 kilometres, other nearest major cities happen to be Coimbatore (172 kilometres) and Kochi (300 kilometres). Kodaikanal can also be reached from Chennai lying at a distance of 525 kilometres and Bangalore which is roughly 465 kilometres away.',
    language: 'In many South Indian states, people often complain of understanding the accent of the locals and face problems. In Pondicherry, you won’t have any such problems. As this town was a French Colony for a long period, people still talk in French here and English is also popular. Among the local languages, Tamil, Malayalam, Telegu, etc. are common. You don’t need to know the local language if you can talk in English.    ',
    best_time: 'Being a hill station, Kodaikanal enjoys a cool and pleasant climate round the year. However, the best time to visit Kodaikanal happens to be the summer months from March to early June when the weather is at its best. Monsoons are moderate in the region and winters are not harsh either. Thereby making Kodaikanal a favourite tourist destination round the year.'
  }]

  selectedPlace: any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {
      this.place_details.forEach(place => {
        if(place.id == params['id']) this.selectedPlace = place
      })
    });
  }

  ngOnInit() {
  }


  bookMyTickets(){
    this.router.navigate([`book/${this.selectedPlace.id}`])
  }

}
