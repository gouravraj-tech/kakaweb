export const CATEGORIES = [
  { id: 'all', label: 'All Delicacies', icon: 'Sparkles' },
  { id: 'rajasthani', label: 'Rajasthani Specials', icon: 'Crown' },
  { id: 'paneer_curry', label: 'Paneer & Curries', icon: 'Flame' },
  { id: 'parathas', label: 'Ghee Parathas', icon: 'Utensils' },
  { id: 'starters', label: 'Starters & Munchies', icon: 'Coffee' },
  { id: 'rice_chinese', label: 'Chinese & Rice', icon: 'Soup' },
  { id: 'desserts', label: 'Royal Desserts', icon: 'Heart' },
  { id: 'beverages', label: 'Beverages', icon: 'CupSoda' }
];

export const MENU_ITEMS = [
  // Section 1: Rajasthani Specials & Signature Thalis
  {
    id: 'thali-exec',
    name: 'Executive Combo Thali',
    category: 'rajasthani',
    description: 'Wholesome royal executive platter featuring Paneer Butter Masala, seasonal sabzi, slow-simmered Dal Tadka, fragrant Jeera Basmati rice, 3 fresh soft Ghee phulkas, crunchy roasted papad, fresh salad, sweet Gulab Jamun, and house pickle.',
    isJain: true,
    isMustTry: true,
    image: '/assets/royal_thali_spread.webp',
    dietaryNote: 'Available in standard pure veg and 100% strict Jain Friendly [J] preparation.'
  },
  {
    id: 'raj-1',
    name: 'Dal Bati Churma Thali',
    category: 'rajasthani',
    description: 'Six hand-rolled whole-wheat batis dipped in pure desi ghee, signature slow-simmered panchmel dal, spicy fiery garlic chutney, sweet churma bowl, raw onion rings, and fresh lemon wedge.',
    isJain: true,
    isMustTry: true,
    image: '/assets/dal_bati_churma.webp',
    dietaryNote: 'Available in strict Jain Friendly [J] preparation without onion, garlic, or root vegetables.'
  },
  {
    id: 'raj-2',
    name: 'Dudh Sev Tamatar & Fresh Ghee Rotis',
    category: 'rajasthani',
    description: 'Thick spicy Ratlami sev gently simmered in a velvety, milk-infused tomato gravy delicately tempered with cumin, turmeric, and royal Marwari spices. Served with hot puffed ghee rotis.',
    isJain: true,
    isMustTry: true,
    image: '/assets/dudh_sev_tamatar.jpg',
    dietaryNote: 'Highly recommended in our strict Jain [J] recipe.'
  },
  {
    id: 'raj-3',
    name: 'Sev Tamatar',
    category: 'rajasthani',
    description: 'Tangy homestyle tomato curry tempered with cumin, hing, and fresh spices, crowned with crisp golden ratlami sev.',
    isJain: true,
    isMustTry: false,
    image: '/assets/dudh_sev_tamatar.jpg'
  },
  {
    id: 'raj-4',
    name: 'Jaipuriya Papad Ki Sabzi',
    category: 'rajasthani',
    description: 'Traditional roasted spiced papad rolls simmered in a tangy yogurt gravy infused with whole spices and dry red chilies.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'raj-5',
    name: 'Rajasthani Besan Kadhi',
    category: 'rajasthani',
    description: 'Slow-cooked buttermilk kadhi tempered with methi dana, curry leaves, hing, and mustard seeds in desi ghee.',
    isJain: true,
    isMustTry: false
  },

  // Section 2: Paneer Specials & North Indian Curries
  {
    id: 'pan-1',
    name: 'Kaju Paneer',
    category: 'paneer_curry',
    description: 'Whole golden roasted cashews and fresh melt-in-mouth cottage cheese cubes cooked in a royal brown cashew-nut gravy.',
    isJain: true,
    isMustTry: true,
    image: '/assets/kaju_paneer.jpg'
  },
  {
    id: 'pan-2',
    name: 'Kadai Paneer',
    category: 'paneer_curry',
    description: 'Fresh cottage cheese tossed with crunchy bell peppers and onions in freshly hand-ground roasted kadai coriander masala.',
    isJain: false,
    isMustTry: false,
    image: '/assets/kaju_paneer.jpg'
  },
  {
    id: 'pan-3',
    name: 'Paneer Butter Masala',
    category: 'paneer_curry',
    description: 'Tender paneer cubes swimming in a rich, velvety tomato-butter makhani gravy delicately finished with kasuri methi.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-4',
    name: 'Paneer Bhurji',
    category: 'paneer_curry',
    description: 'Crumbled cottage cheese sautéed homestyle with finely diced onions, green chilies, juicy tomatoes, and fresh coriander.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-5',
    name: 'Matar Paneer',
    category: 'paneer_curry',
    description: 'Sweet tender green peas and soft paneer cubes in classic homestyle North Indian cumin-spiced masala gravy.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-6',
    name: 'Kaju Curry',
    category: 'paneer_curry',
    description: 'Generous helping of roasted whole cashew nuts cooked in a rich, mildly sweet and aromatic royal white-to-golden gravy.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-7',
    name: 'Veg Kolhapuri',
    category: 'paneer_curry',
    description: 'Assorted seasonal vegetables tossed in a fiery red gravy infused with dry roasted coconut, sesame, and red chillies.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-8',
    name: 'Mix Veg',
    category: 'paneer_curry',
    description: 'Seasonal farm-fresh vegetables cooked in a comforting homestyle cumin gravy with mild ginger and coriander.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-9',
    name: 'Aloo Matar',
    category: 'paneer_curry',
    description: 'Potatoes and fresh green peas slow-simmered in a North Indian tomato gravy scented with garam masala.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-10',
    name: 'Aloo Gobi',
    category: 'paneer_curry',
    description: 'Cauliflower florets and tender potato cubes roasted with golden turmeric, julienned ginger, and whole cumin seeds.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-11',
    name: 'Jeera Aloo (Dry)',
    category: 'paneer_curry',
    description: 'Diced potatoes dry-roasted with toasted roasted cumin seeds, fresh green chillies, and a squeeze of fresh lemon.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-12',
    name: 'Aloo Tamatar',
    category: 'paneer_curry',
    description: 'Homestyle potato curry in light, cumin-scented tomato broth, perfect with hot tawa phulkas.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'pan-13',
    name: 'Dal Special',
    category: 'paneer_curry',
    description: "Kaka's signature triple-lentil recipe simmered for hours and double-tempered with aromatic desi ghee.",
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-14',
    name: 'Dal Tadka',
    category: 'paneer_curry',
    description: 'Yellow toor dal tempered with garlic, toasted cumin seeds, and whole Kashmiri red chillies in bubbling ghee.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-15',
    name: 'Dal Fry',
    category: 'paneer_curry',
    description: 'Comforting yellow lentils sautéed with golden onions, ripe tomatoes, and spicy green chillies.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-16',
    name: 'Executive Thali Combo',
    category: 'paneer_curry',
    description: 'A wholesome meal comprising one vegetable curry, one dal, fragrant rice, two soft rotis, crispy papad, and a sweet.',
    isJain: true,
    isMustTry: false,
    image: '/assets/royal_thali_spread.webp'
  },
  {
    id: 'pan-17',
    name: 'Ghee Roti',
    category: 'paneer_curry',
    description: 'Soft whole-wheat phulkas brushed with pure aromatic desi ghee straight off the iron tawa.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'pan-18',
    name: 'Plain Roti',
    category: 'paneer_curry',
    description: 'Hot, wholesome whole-wheat tawa phulkas made fresh for every order.',
    isJain: true,
    isMustTry: false
  },

  // Section 3: Ghee-Roasted Stuffed Parathas
  {
    id: 'par-1',
    name: "Kaka's Cheese Special Paratha",
    category: 'parathas',
    description: 'Generously stuffed with a spiced blend of premium cheeses, herbs, and mild green chillies, roasted to crisp golden perfection on cast iron in pure desi ghee. Served with chilled set curd, home-style pickle, and fresh butter.',
    isJain: true,
    isMustTry: true,
    image: '/assets/cheese_paratha_melt.jpg'
  },
  {
    id: 'par-2',
    name: "Kaka's Special Paratha",
    category: 'parathas',
    description: "Chef's secret blend of spiced garden vegetables stuffed inside whole-wheat dough and slow-roasted in pure ghee.",
    isJain: false,
    isMustTry: false,
    image: '/assets/ghee_paratha.jpg'
  },
  {
    id: 'par-3',
    name: 'Cheese Paratha',
    category: 'parathas',
    description: 'Melting mozzarella and cheddar cheese encased in whole-wheat flatbread with fragrant Italian-Indian herb seasoning.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'par-4',
    name: 'Paneer Paratha',
    category: 'parathas',
    description: 'Fresh grated spiced cottage cheese with mint, ajwain, and green chillies, roasted golden with pure ghee.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'par-5',
    name: 'Garlic Paratha',
    category: 'parathas',
    description: 'Crushed roasted garlic, finely chopped green chillies, and ajwain filling with bold Punjabi dhaba flavors.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'par-6',
    name: 'Gobi Paratha',
    category: 'parathas',
    description: 'Finely grated cauliflower florets seasoned with carom seeds, ginger, and garam masala roasted till crisp.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'par-7',
    name: 'Aloo Paratha',
    category: 'parathas',
    description: 'Classic cumin-scented spiced mashed potato stuffing roasted on cast iron with pure desi ghee.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'par-8',
    name: 'Aloo Pyaz Paratha',
    category: 'parathas',
    description: 'Spiced potatoes mixed with finely chopped crisp red onions for extra crunch and savory depth.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'par-9',
    name: 'Green Peas Paratha',
    category: 'parathas',
    description: 'Seasoned crushed sweet green peas roasted with cumin and coriander in pure desi ghee.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'par-10',
    name: 'Corn Cheese Paratha',
    category: 'parathas',
    description: 'Sweet American corn kernels tossed with spiced herbs and gooey melted cheese in a crisp tawa flatbread.',
    isJain: true,
    isMustTry: false
  },

  // Section 4: Quick Bites, Munchies & Sindhi Starters
  {
    id: 'str-1',
    name: 'Dal Pakwaan',
    category: 'starters',
    description: 'Two large, handcrafted crispy flatbreads seasoned with ajwain and black pepper, served alongside a bowl of tempered chana dal topped with sweet tamarind chutney, green mint sauce, and chopped onions.',
    isJain: false,
    isMustTry: true,
    image: '/assets/dal_pakwaan.jpg'
  },
  {
    id: 'str-2',
    name: 'Dahi Pakwaan',
    category: 'starters',
    description: 'Crushed crispy pakwaan layered with thick chilled sweet yogurt, roasted cumin powder, pomegranate, tangy chutneys, and nylon sev.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'str-3',
    name: 'Crispy Corn',
    category: 'starters',
    description: 'American golden corn kernels batter-fried crisp and tossed with crushed black pepper, capsicum, and herbs.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'str-4',
    name: 'Peri Peri French Fries',
    category: 'starters',
    description: 'Golden fried potato batons tossed in a spicy, zesty South African peri peri spice blend.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'str-5',
    name: 'French Fries',
    category: 'starters',
    description: 'Classic salted golden potato fries served hot and crunchy with ketchup.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'str-6',
    name: 'Cheese Grilled Sandwich',
    category: 'starters',
    description: 'Triple-decker toasted bread loaded with melted cheese, spicy mint chutney, and crunchy capsicum.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'str-7',
    name: 'Cheese Masala Papad',
    category: 'starters',
    description: 'Roasted Rajasthani papad topped with shredded cheese, diced onions, tomatoes, and tangy chaat masala.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'str-8',
    name: 'Masala Papad',
    category: 'starters',
    description: 'Crisp roasted papad loaded with crunchy spiced onion-tomato salad and fresh coriander.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'str-9',
    name: 'Masala Corn',
    category: 'starters',
    description: 'Steamed sweet corn kernels tossed with melted butter, fresh lime juice, and chatpata masala.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'str-10',
    name: 'Bhel Puri',
    category: 'starters',
    description: 'Puffed rice tossed with tangy imli chutney, green mint chutney, onions, crispy sev, and fresh coriander.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'str-11',
    name: 'Desi Butter Veg Maggi',
    category: 'starters',
    description: 'Street-style nostalgia noodles tossed with finely chopped farm veggies and a dollop of pure butter.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'str-12',
    name: 'Plain Maggi',
    category: 'starters',
    description: 'Classic comfort instant noodles cooked with the original aromatic tastemaker.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'str-13',
    name: 'Bread Butter',
    category: 'starters',
    description: 'Fresh bakery bread slices spread generously with salted butter.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'str-14',
    name: 'Fresh Green Salad',
    category: 'starters',
    description: 'Sliced cucumbers, ripe tomatoes, carrots, and fresh lemon wedges sprinkled with rock salt.',
    isJain: true,
    isMustTry: false
  },

  // Section 5: Rice & Desi Chinese
  {
    id: 'ric-1',
    name: 'Paneer Fried Rice',
    category: 'rice_chinese',
    description: 'Aromatic wok-tossed basmati rice with golden sautéed paneer cubes, spring greens, and light soy sauce.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'ric-2',
    name: 'Veg Fried Rice',
    category: 'rice_chinese',
    description: 'Wok-tossed basmati rice tossed with shredded cabbage, carrots, bell peppers, and mild seasoning.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'ric-3',
    name: 'Ghee Rice',
    category: 'rice_chinese',
    description: 'Fragrant long-grain basmati rice gently tossed in pure desi ghee with whole aromatic spices like cloves and cardamom.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'ric-4',
    name: 'Jeera Rice',
    category: 'rice_chinese',
    description: 'Fluffy basmati rice tempered with toasted cumin seeds and fresh coriander.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'ric-5',
    name: 'Curd Rice',
    category: 'rice_chinese',
    description: 'Cooling South-style tempered rice with fresh curd, mustard seeds, curry leaves, and pomegranate arils.',
    isJain: false,
    isMustTry: false
  },

  // Section 6: Royal Desserts
  {
    id: 'des-1',
    name: 'Sindhi Shahi Gurari',
    category: 'desserts',
    description: 'Ancient wholesome dessert: whole-wheat dough stuffed with organic jaggery, crushed almonds, cashews, and cardamom, roasted gently with pure ghee until the jaggery caramelizes into sweet indulgence.',
    isJain: true,
    isMustTry: true,
    image: '/assets/shahi_gurari.jpg'
  },
  {
    id: 'des-2',
    name: 'Sindhi Gurari',
    category: 'desserts',
    description: 'Traditional homestyle jaggery-stuffed sweet flatbread served hot, glistening with pure desi ghee.',
    isJain: true,
    isMustTry: false,
    image: '/assets/shahi_gurari.jpg'
  },
  {
    id: 'des-3',
    name: 'Shahi Crunch with Ice Cream',
    category: 'desserts',
    description: 'Crispy warm dessert base drizzled with rich thickened rabri and paired with a creamy scoop of vanilla ice cream.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'des-4',
    name: 'Traditional Churma',
    category: 'desserts',
    description: 'Coarsely crushed wheat bati crumble gently blended with boora sugar, green cardamom, and liberal pours of pure desi ghee.',
    isJain: true,
    isMustTry: false,
    image: '/assets/dal_bati_churma.webp'
  },

  // Section 7: Beverages
  {
    id: 'bev-1',
    name: 'Cold Coffee with Ice Cream',
    category: 'beverages',
    description: 'Rich blended espresso frappe topped with a thick scoop of vanilla ice cream and chocolate drizzle.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'bev-2',
    name: 'Classic Cold Coffee',
    category: 'beverages',
    description: 'Chilled frothy blended milk coffee made with roasted coffee beans and chilled whole milk.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'bev-3',
    name: 'Blue Lagoon Mocktail',
    category: 'beverages',
    description: 'Fizzy electric blue curacao and citrus refresher garnished with lemon slice and fresh mint leaves.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'bev-4',
    name: 'Mint Mojito',
    category: 'beverages',
    description: 'Muddled garden fresh mint, tangy lime wedges, organic sugar syrup, and sparkling soda on ice.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'bev-5',
    name: 'Punjabi Sweet Lassi',
    category: 'beverages',
    description: 'Thick, hand-churned sweetened curd served in a tall glass, crowned with rich malai and saffron strands.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'bev-6',
    name: 'Fresh Lemonade',
    category: 'beverages',
    description: 'Freshly squeezed lemon juice with chilled water, available in sweet, salted, or mixed preparation.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'bev-7',
    name: 'Spiced Butter Milk',
    category: 'beverages',
    description: 'Cooling churned chaas tempered with roasted cumin powder, rock salt, ginger, and fresh coriander.',
    isJain: true,
    isMustTry: false
  },
  {
    id: 'bev-8',
    name: 'Desi Masala Tea (S / M / L)',
    category: 'beverages',
    description: 'Slow-brewed Indian milk tea infused with crushed fresh ginger, green cardamom, cloves, and cinnamon.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'bev-9',
    name: 'Lemon Tea (S / M / L)',
    category: 'beverages',
    description: 'Aromatic light black tea brewed with fresh lemon juice and a touch of honey or sugar.',
    isJain: false,
    isMustTry: false
  },
  {
    id: 'bev-10',
    name: 'Filter Coffee (S / M / L)',
    category: 'beverages',
    description: 'Traditional decoction chicory brewed milk coffee served piping hot with frothy head.',
    isJain: false,
    isMustTry: false
  }
];
