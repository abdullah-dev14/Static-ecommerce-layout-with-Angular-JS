import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

}
=======
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Parrot {
  name: string;
  nickname: string;
  species: string;
  habitat: string;
  diet: string;
  price: number;
  img: string;
  borderColor: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
  styleUrls: ['./cards.css']
})
export class Cards {
  searchText: string = '';

parrots: Parrot[] = [
{
  name: 'Alexander Parakeet',
  nickname: 'Emerald',
  species: 'Alexandrine Parakeet (Green Mutation)',
  habitat: 'Indian forests & woodlands',
  diet: 'Fruits, seeds, nuts',
  price: 600,
  img: 'https://images.unsplash.com/photo-1645866694098-6cd3e36293fe?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#39851bff'
},

{
  name: 'Aqua Joy',
  nickname: 'Blue Gem',
  species: 'Monk Parrot (Blue Mutation)',
  habitat: 'Woodlands, grasslands, urban areas',
  diet: 'Seeds, fruits, vegetables',
  price: 800,
  img: 'https://images.unsplash.com/photo-1583840024136-64e17a1f9c56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#24b7f1'
},

{
  name: 'Blue Macaw',
  nickname: 'Sky Majesty',
  species: 'Blue Macaw (Blue Mutation)',
  habitat: 'Rainforests & tropical jungles',
  diet: 'Nuts, fruits, seeds',
  price: 1300,
  img: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#0077cc'
},

{
  name: 'Cockatoo',
  nickname: 'Ivory',
  species: 'Cockatoo (White Mutation)',
  habitat: 'Australian woodlands & forests',
  diet: 'Seeds, fruits, nuts',
  price: 1000,
  img: 'https://images.unsplash.com/photo-1697626057437-ad5fde3dad3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#0d0f0f'
},

{
  name: 'Cockatiel',
  nickname: 'Sunny',
  species: 'Cockatiel (Yellow Mutation)',
  habitat: 'Australian bushlands',
  diet: 'Seeds, grains, vegetables',
  price: 250,
  img: 'https://images.unsplash.com/photo-1623329423038-18c441734417?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#a0963eff'
},

{
  name: 'Grey African Parrot',
  nickname: 'Silver Whisper',
  species: 'African Grey Parrot (Grey Mutation)',
  habitat: 'Central African forests',
  diet: 'Seeds, nuts, fruits',
  price: 950,
  img: 'https://images.unsplash.com/photo-1601422931998-d14d7f0236df?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#58595aff'
},

{
  name: 'Indian Ringneck',
  nickname: 'Golden Ring',
  species: 'Indian Ringneck Parakeet (Yellow Mutation)',
  habitat: 'Indian subcontinent forests & woodlands',
  diet: 'Seeds, fruits, grains',
  price: 400,
  img: 'https://images.unsplash.com/photo-1511823794984-b87716139b88?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#979f3aff'
},

{
  name: 'Lorikeet Parakeet',
  nickname: 'Rainbow Flier',
  species: 'Lorikeet Parakeet (Multicolor Mutation)',
  habitat: 'Tropical and subtropical forests',
  diet: 'Nectar, fruits, seeds',
  price: 850,
  img: 'https://images.unsplash.com/photo-1588154323486-90eb08ecb793?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#c824f1'
},

{
  name: 'Lovebirds',
  nickname: 'Peach Duo',
  species: 'Lovebird (Peach-Faced)',
  habitat: 'African grasslands & woodlands',
  diet: 'Seeds, berries, fruits',
  price: 150,
  img: 'https://plus.unsplash.com/premium_photo-1673455210141-a12ad7d5e40b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#385730ff'
},

{
  name: 'Red Macaw',
  nickname: 'Scarlet Singer',
  species: 'Red Macaw (Red Mutation)',
  habitat: 'Tropical rainforests',
  diet: 'Nuts, fruits, seeds',
  price: 1200,
  img: 'https://images.unsplash.com/photo-1616902509409-a624c4f31a56?q=80&w=566&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#fa3003ff'
},

{
  name: 'Rose-Breasted Cockatoo',
  nickname: 'Blush',
  species: 'Rose-Breasted Cockatoo (Pink Mutation)',
  habitat: 'Woodland regions',
  diet: 'Fruits, seeds, nuts',
  price: 1100,
  img: 'https://images.unsplash.com/photo-1557350779-4f9afdd99bf3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#f06ace'
},

{
  name: 'Yellow Conure',
  nickname: 'Sunburst',
  species: 'Yellow Conure (Yellow Mutation)',
  habitat: 'Tropical forests',
  diet: 'Seeds, fruits, vegetables',
  price: 220,
  img: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  borderColor: '#e8c217'
}

];

  get filteredParrots(): Parrot[] {
    if (!this.searchText) return this.parrots;
    const search = this.searchText.toLowerCase();
    return this.parrots.filter(parrot =>
      parrot.name.toLowerCase().includes(search) ||
      parrot.nickname.toLowerCase().includes(search) ||
      parrot.species.toLowerCase().includes(search) ||
      parrot.habitat.toLowerCase().includes(search) ||
      parrot.diet.toLowerCase().includes(search)
    );
  }

  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, `<span class="highlight">$1</span>`);
  }
}

>>>>>>> c9ec29d (update data)
