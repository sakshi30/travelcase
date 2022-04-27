import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.less']
})
export class PlacesComponent implements OnInit {

  @Input() selectedMood = '';
  places = [
    {
      id: 0, 
      place_id: '1',
      place_image: '../../assets/shillong.png',
      place_name: 'Shillong',
      place_state: 'Meghalaya',
      place_description: 'Shillong, the capital of Meghalaya, is one of the most pristine and picturesque hill stations in India. Located in the northeast part of the country, Shillong is known for its mesmerizing combination of waterfalls and forests. Better known as ‘Scotland of the East’, Shillong takes pride in its ancient culture. Scintillating Shillong unravels the opportunity for you to explore a number of attractions including Lady Hydari Park, Ward’s Lake, Laitlum Canyons, Elephant Falls, and so on.'

    },
    {
      id: 1, 
      place_id: '1',
      place_image: '../../assets/Shimla.png',
      place_name: 'Shimla',
      place_state: 'Himachal Pradesh',
      place_description: "It's snowing in Shimla. The Himachal Pradesh capital witnessed the season's first snowfall on Monday, much to the cheer of tourists flocking the town. Several roads in upper Shimla and Manali were blocked due to the heavy snowfall. Meanwhile, police also advised people not to visit these areas till snow is cleared.Hoteliers cheered up with the hope that tourists will come in large numbers on the New Year's Eve. Tourist spots near Shimla, such as Kufri, Fagu and Narkanda also experienced snowfall, making the hill stations even more picturesque."
    },
    {
      id: 2, 
      place_id: '2',
      place_image: '../../assets/Chitrakoot Falls.png',
      place_name: 'Chitrakoot Falls',
      place_state: 'Jagdalpur',
      place_description: 'Very few people would know that Chitrakoot falls in Jagdalpur is the largest waterfall in our country. The mouth of the waterfall is about 1000 feet wide and is horse-shoe shaped. You can really experience the chill in your spines as the water gushes down into a deep cavern.'
    },
    {
      id: 3, 
      place_id: '2',
      place_image: '../../assets/pangong.png',
      place_name: 'Pangong Lake',
      place_state: 'TSO lake',
      place_description: 'Pangong Lake is natures paradise, located in Himalayan hills and is about 134 km long. The lake also shares its waters with the region of Tibet as well. It has a romantic view to offer due to which it has been a part of many Bollywood (Indian film industry) scenes and songs as well.  Sit here for hours around the lake and gaze the clear sky in a moonlit night, views that would definitely help you battle the vagaries of life.'
    },
    {
      id: 4, 
      place_id: '3',
      place_image: '../../assets/Pondicherry.png',
      place_name: 'Pondicherry',
      place_state: 'Puducherry',
      place_description: 'Visiting a place with historical background along with geographical excellence is worthwhile. Pondicherry is such a place which is the collection of certain districts, like Pondicherry, Yanam, Karaikal, and Mahe. Till date, you can get the French essence in this town in the designs and architecture of houses, in the taste of foods, and the culture of the town. Once you visit this place, you fall in love with the rich heritage of this beach town while enjoying the outstanding natural beauty of this place. Whether planning a solo or a group trip, some tips are always useful. So, here are Pondicherry travel tips that will help you plan a better excursion.'
    },
    {
      id: 5, 
      place_id: '3',
      place_image: '../../assets/kodiakanal.png',
      place_name: 'Kodiakanal',
      place_state: 'Tamil Nadu',
      place_description: 'While May witnesses summer vacations in schools and a holiday season daunting upon us, not many people like spending their time outside because of the scorching heat of the sun. All that aside, if you want some natural beauty and some serene vibes around, Kodaikanal is the perfect place to be in. There are many things to do in Kodaikanal in May that will compel you to stay there forever. To be fair, there isn’t going to be a lot of difference when it comes round to the things you do and explore the entire year-round, but there are some special treats here and there, best suited for that time of the year only. To help you out with that, we have listed out some of the best things to do in Kodaikanal during the summer months, especially that of May.'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getMoreInformation(place_id){
    console.log(place_id)
    this.router.navigate([`details/${place_id}`])
  }

}
