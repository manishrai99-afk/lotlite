// --- LOTLITE CORE JAVASCRIPT APPLICATION ---

// 1. MOCK PROPERTY DATABASE (Initial Seed Data)
const SEED_PROPERTIES = [
    {
        id: "prop-1",
        title: "Skyline Oasis Apartments",
        price: 8500000,
        priceDisplay: "₹85 Lakh",
        location: "Sector 62, Noida",
        type: "Apartment",
        purpose: "buy",
        bhk: 3,
        baths: 3,
        area: 1650,
        image: "assets/prop_1.jpg",
        featured: true,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Swimming Pool", "Modern Gym", "24/7 Security", "Power Backup", "Parking", "Kids Play Area"],
        agent: {
            name: "Rajesh Kumar",
            phone: "+91 98765 43210",
            email: "rajesh@lotlite.com",
            avatar: "RK"
        },
        description: "Experience premium living in the heart of Sector 62. This spacious 3 BHK apartment offers panoramic skyline views, top-tier ventilation, modern modular kitchen fitting, and premium vitrified tiling. Located in a high-security gated community close to top corporate parks and metro station.",
        mapX: 35,
        mapY: 42
    },
    {
        id: "prop-2",
        title: "Whispering Pines Luxury Villa",
        price: 32000000,
        priceDisplay: "₹3.2 Crore",
        location: "Sohna Road, Gurgaon",
        type: "Villa",
        purpose: "buy",
        bhk: 4,
        baths: 4,
        area: 3400,
        image: "assets/prop_2.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "0-1 Years",
        amenities: ["Private Garden", "Home Automation", "Clubhouse", "Swimming Pool", "24/7 Security", "Pet Friendly"],
        agent: {
            name: "Neha Sharma",
            phone: "+91 98765 43211",
            email: "neha@lotlite.com",
            avatar: "NS"
        },
        description: "A masterpieces of modern architecture. This ultra-luxury 4 BHK duplex villa features a massive private landscaped garden, high ceilings, double glazed glass windows, automated smart-lighting controls, and a fully loaded modular kitchen. A perfect oasis for families seeking privacy and high-class amenities.",
        mapX: 62,
        mapY: 28
    },
    {
        id: "prop-3",
        title: "Nova Hub Executive Suites",
        price: 65000,
        priceDisplay: "₹65,000/mo",
        location: "Koramangala, Bangalore",
        type: "Commercial",
        purpose: "rent",
        bhk: null,
        baths: 2,
        area: 1200,
        image: "assets/prop_3.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Fiber Internet", "Central AC", "Conference Room", "Server Room", "Elevator", "Power Backup"],
        agent: {
            name: "Anil Murthy",
            phone: "+91 98765 43212",
            email: "anil@lotlite.com",
            avatar: "AM"
        },
        description: "Fully-furnished office space optimized for tech startups or consulting firms. Prime location in Koramangala's bustling business hub. Features a reception area, meeting rooms, executive cubicles, pantry, server station, and high-speed enterprise internet pre-installed. Immediate occupancy available.",
        mapX: 48,
        mapY: 58
    },
    {
        id: "prop-4",
        title: "Aura Grace Premium Apartment",
        price: 48000,
        priceDisplay: "₹48,000/mo",
        location: "Bandra West, Mumbai",
        type: "Apartment",
        purpose: "rent",
        bhk: 2,
        baths: 2,
        area: 980,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "5-10 Years",
        amenities: ["Sea View", "Elevator", "Parking", "24/7 Security", "Intercom", "Water Purifier"],
        agent: {
            name: "Karan Johar",
            phone: "+91 98765 43213",
            email: "karan@lotlite.com",
            avatar: "KJ"
        },
        description: "Cozy and bright 2 BHK apartment in a prestigious sea-facing lane in Bandra West. Features high-grade Italian marble flooring, designer lighting fixtures, fully air-conditioned rooms, and a modern open kitchen layout. Within walking distance to premium dining, cafes, and supermarkets.",
        mapX: 22,
        mapY: 65
    },
    {
        id: "prop-5",
        title: "Prime Commercial Retail Shop",
        price: 18000000,
        priceDisplay: "₹1.8 Crore",
        location: "Whitefield, Bangalore",
        type: "Commercial",
        purpose: "buy",
        bhk: null,
        baths: 1,
        area: 850,
        image: "assets/prop_3.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["High Footfall", "Parking", "24/7 Security", "Fire Alarm"],
        agent: {
            name: "Anil Murthy",
            phone: "+91 98765 43212",
            email: "anil@lotlite.com",
            avatar: "AM"
        },
        description: "Excellent commercial storefront in a high-footfall mall block in Whitefield. Wide double-glass display window, double-volume ceiling heights, and rear access for inventory loading. Perfect location for high-end boutique stores, pharmacies, or organic supermarkets. Highly visible roadside corner presence.",
        mapX: 52,
        mapY: 48
    },
    {
        id: "prop-6",
        title: "Greenfield Residential Plot",
        price: 5500000,
        priceDisplay: "₹55 Lakh",
        location: "Yamuna Expressway, Greater Noida",
        type: "Plot",
        purpose: "buy",
        bhk: null,
        baths: null,
        area: 2250,
        image: "assets/prop_2.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Under Construction",
        age: "0-1 Years",
        amenities: ["Gated Community", "Water Connection", "Park", "Wide Roads"],
        agent: {
            name: "Rajesh Kumar",
            phone: "+91 98765 43210",
            email: "rajesh@lotlite.com",
            avatar: "RK"
        },
        description: "An east-facing premium corner plot in a secure gated township project. Surrounded by lush parks, wide paved internal roads (12m width), pre-installed water and electrical links, and modern sewage grid. Ideal investment opportunity with guaranteed high appreciation rates due to proximity to the new Noida International Airport.",
        mapX: 75,
        mapY: 72
    },
    {
        id: "prop-7",
        title: "Elegance 2 BHK Cozy Suite",
        price: 25000,
        priceDisplay: "₹25,000/mo",
        location: "Sector 62, Noida",
        type: "Apartment",
        purpose: "rent",
        bhk: 2,
        baths: 2,
        area: 1100,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Power Backup", "Parking", "Kids Play Area", "24/7 Security", "Gym"],
        agent: {
            name: "Rajesh Kumar",
            phone: "+91 98765 43210",
            email: "rajesh@lotlite.com",
            avatar: "RK"
        },
        description: "Very neat, well-ventilated 2 BHK apartment in a family-oriented society. Semi-furnished with wardrobes, modular kitchen shelves, and chimney. Strategically situated right behind major schools, commercial complexes, and food courts. Rent is highly competitive and negotiable for long-term corporate tenants.",
        mapX: 38,
        mapY: 45
    },
    {
        id: "prop-8",
        title: "Royal Palms 5 BHK Mansion",
        price: 52000000,
        priceDisplay: "₹5.2 Crore",
        location: "Bandra West, Mumbai",
        type: "Villa",
        purpose: "buy",
        bhk: 5,
        baths: 6,
        area: 5500,
        image: "assets/prop_2.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Sea View", "Private Pool", "Home Theatre", "Elevator", "Gym", "Servant Quarters"],
        agent: {
            name: "Karan Johar",
            phone: "+91 98765 43213",
            email: "karan@lotlite.com",
            avatar: "KJ"
        },
        description: "The epitome of high-class real estate. This iconic sea-facing villa is spread across three floors with private elevator access, featuring an infinity pool overlooking the Arabian Sea, private home theatre, grand master suite with walk-in closets, fully integrated automated air-conditioning system, and specialized staff quarters.",
        mapX: 20,
        mapY: 60
    },
    {
        id: "prop-pune-1",
        title: "Kolte-Patil Life Republic",
        price: 6800000,
        priceDisplay: "₹68 Lakh",
        location: "Hinjawadi, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 2,
        baths: 2,
        area: 1050,
        image: "assets/prop_1.jpg",
        featured: true,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Swimming Pool", "Modern Gym", "24/7 Security", "Clubhouse", "Kids Play Area"],
        agent: {
            name: "Rahul Deshmukh",
            phone: "+91 98111 22233",
            email: "rahul.deshmukh@lotlite.com",
            avatar: "RD"
        },
        description: "Premium 2 BHK apartment inside the highly sought-after 390-acre Life Republic township by Kolte-Patil. Features two balconies with panoramic views of the landscaped central parks, modern modular fittings in the kitchen, vitrified tiles, and smart security systems. Extremely close to Hinjawadi Phase 1 & 2 IT park gates.",
        mapX: 18,
        mapY: 35
    },
    {
        id: "prop-pune-2",
        title: "Godrej Rivergreens Estate",
        price: 11000000,
        priceDisplay: "₹1.1 Crore",
        location: "Manjari, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 3,
        baths: 3,
        area: 1450,
        image: "assets/prop_2.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Under Construction",
        age: "0-1 Years",
        amenities: ["Landscaped Garden", "Sports Court", "Swimming Pool", "Power Backup", "Gated Community", "Clubhouse"],
        agent: {
            name: "Pooja Mehta",
            phone: "+91 98111 22244",
            email: "pooja.mehta@lotlite.com",
            avatar: "PM"
        },
        description: "Spacious 3 BHK apartment in Godrej Rivergreens, a sprawling riverfront township at Manjari. Designed with sustainable structures and natural ventilation, this property features large bedrooms, premium bath fittings, and massive balconies. Close to Kharadi, EON IT Park, and Pune-Solapur highway.",
        mapX: 82,
        mapY: 48
    },
    {
        id: "prop-pune-3",
        title: "VTP Blue Waters Sky-Condo",
        price: 26000,
        priceDisplay: "₹26,000/mo",
        location: "Mahalunge, Pune",
        type: "Apartment",
        purpose: "rent",
        bhk: 2,
        baths: 2,
        area: 980,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Gym", "Parking", "Clubhouse", "24/7 Security", "Pet Friendly", "Swimming Pool"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "Cozy 2 BHK rental apartment in VTP Blue Waters township, Mahalunge. Excellent high-rise view overlooking the river and hills. Furnished with standard modular kitchen cabinets, safety grills, curtains, and geysers. Strategically situated right off the Baner-Mahalunge road with quick access to Hinjawadi and Pune-Bangalore highway.",
        mapX: 25,
        mapY: 22
    },
    {
        id: "prop-pune-4",
        title: "Panchshil Trump Towers",
        price: 135000000,
        priceDisplay: "₹13.5 Crore",
        location: "Koregaon Park, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 4,
        baths: 5,
        area: 4400,
        image: "assets/prop_3.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Concierge Service", "Private Elevator", "Infinity Pool", "Modern Gym", "Home Automation", "Servant Quarters"],
        agent: {
            name: "Vikram Malhotra",
            phone: "+91 98111 22266",
            email: "vikram@lotlite.com",
            avatar: "VM"
        },
        description: "An ultra-luxury 4.5 BHK super-sized residence in Pune's most iconic address - Trump Towers, Koregaon Park. Exquisitely designed with imported Italian marble, designer light installations, fully integrated smart-home automation system, and floor-to-ceiling glass windows offering beautiful skyline vistas. Includes 24/7 concierge service, private library access, and 5-tier security.",
        mapX: 60,
        mapY: 38
    },
    {
        id: "prop-pune-5",
        title: "Nyati Elysia High-Rise",
        price: 42000,
        priceDisplay: "₹42,000/mo",
        location: "Kharadi, Pune",
        type: "Apartment",
        purpose: "rent",
        bhk: 3,
        baths: 3,
        area: 1600,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["24/7 Security", "Clubhouse", "Modern Gym", "Swimming Pool", "High Speed Elevators", "Modular Kitchen"],
        agent: {
            name: "Pooja Mehta",
            phone: "+91 98111 22244",
            email: "pooja.mehta@lotlite.com",
            avatar: "PM"
        },
        description: "Fully furnished 3 BHK ready-to-move apartment in Nyati Elysia, Kharadi. Located within 5 minutes of EON IT Park, WTC, and premium schools. Fully loaded with premium furniture, beds, wardrobes, smart LED TV, washing machine, water purifier, double-door refrigerator, and beautiful kitchen set.",
        mapX: 70,
        mapY: 55
    },
    {
        id: "prop-pune-6",
        title: "Pride World City - Long Island",
        price: 8200000,
        priceDisplay: "₹82 Lakh",
        location: "Wakad, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 2,
        baths: 2,
        area: 1120,
        image: "assets/prop_1.jpg",
        featured: true,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Swimming Pool", "Modern Gym", "24/7 Security", "Clubhouse", "Power Backup", "Parking"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "Spacious 2 BHK apartment in Pride World City, Wakad. Beautiful design, private balcony with green views, modular kitchen with chimney, premium vitrified tiles, and smart safety lockers. Close to major schools and IT hubs.",
        mapX: 12,
        mapY: 30
    },
    {
        id: "prop-pune-7",
        title: "Tinsel Town Residency",
        price: 6500000,
        priceDisplay: "₹65 Lakh",
        location: "Hinjawadi Phase 2, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 2,
        baths: 2,
        area: 980,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Ready to Move",
        age: "0-1 Years",
        amenities: ["Modern Gym", "24/7 Security", "Kids Play Area", "Clubhouse", "Parking"],
        agent: {
            name: "Rahul Deshmukh",
            phone: "+91 98111 22233",
            email: "rahul.deshmukh@lotlite.com",
            avatar: "RD"
        },
        description: "Modern 2 BHK unfurnished apartment in Tinsel Town, Hinjawadi Phase 2. Perfect for IT professionals seeking proximity to tech parks. Well-ventilated layout, premium bathroom fixtures, and 24/7 gated security setup.",
        mapX: 10,
        mapY: 36
    },
    {
        id: "prop-pune-8",
        title: "Sukhwani Panorama Heights",
        price: 9500000,
        priceDisplay: "₹95 Lakh",
        location: "Sus, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 3,
        baths: 3,
        area: 1450,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Semi-Furnished",
        constructionStatus: "Under Construction",
        age: "0-1 Years",
        amenities: ["Swimming Pool", "Modern Gym", "Power Backup", "24/7 Security", "Clubhouse", "Indoor Games"],
        agent: {
            name: "Pooja Mehta",
            phone: "+91 98111 22244",
            email: "pooja.mehta@lotlite.com",
            avatar: "PM"
        },
        description: "Premium 3 BHK apartment in Sukhwani Panorama, Sus. Right next to Baner, offering the perfect blend of peace and connectivity. Features wide balconies, luxury fittings, and top-tier construction quality. Handover in 6 months.",
        mapX: 24,
        mapY: 40
    },
    {
        id: "prop-pune-9",
        title: "Castalia By Kasturi",
        price: 14500000,
        priceDisplay: "₹1.45 Crore",
        location: "Wakad, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 3,
        baths: 3,
        area: 1680,
        image: "assets/prop_1.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Swimming Pool", "Modern Gym", "Private Garden", "24/7 Security", "Clubhouse", "Home Automation"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "Exquisite fully furnished 3 BHK residence by Kasturi Developers in Wakad. High-end Italian marble, custom Italian modular kitchen, fully integrated AC units, and high-tech electronic safety systems. Immediate occupancy.",
        mapX: 16,
        mapY: 32
    },
    {
        id: "prop-pune-10",
        title: "Signature Meadows",
        price: 5400000,
        priceDisplay: "₹54 Lakh",
        location: "Punawale, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 2,
        baths: 2,
        area: 1020,
        image: "assets/prop_1.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["24/7 Security", "Power Backup", "Kids Play Area", "Clubhouse", "Parking"],
        agent: {
            name: "Rahul Deshmukh",
            phone: "+91 98111 22233",
            email: "rahul.deshmukh@lotlite.com",
            avatar: "RD"
        },
        description: "Value-for-money 2 BHK flat at Punawale. Safe, peaceful society with close access to Pune-Bangalore Highway and Hinjawadi IT Park. Ideal choice for families seeking affordable yet modern residential living.",
        mapX: 8,
        mapY: 26
    },
    {
        id: "prop-pune-11",
        title: "Urban Space Premium Flat",
        price: 18500000,
        priceDisplay: "₹1.85 Crore",
        location: "Baner, Pune",
        type: "Apartment",
        purpose: "buy",
        bhk: 4,
        baths: 4,
        area: 2200,
        image: "assets/prop_1.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Swimming Pool", "Modern Gym", "Home Automation", "24/7 Security", "Clubhouse", "Servant Quarters"],
        agent: {
            name: "Vikram Malhotra",
            phone: "+91 98111 22266",
            email: "vikram@lotlite.com",
            avatar: "VM"
        },
        description: "Spacious and fully furnished 4 BHK premium apartment in Baner's prime street. Designed with large private terraces, high-end marble floors, fully loaded automation system, and designated double parking bays.",
        mapX: 22,
        mapY: 34
    },
    {
        id: "prop-pune-12",
        title: "Pristine Grandeur Villas",
        price: 34000000,
        priceDisplay: "₹3.4 Crore",
        location: "Wakad, Pune",
        type: "Villa",
        purpose: "buy",
        bhk: 4,
        baths: 4,
        area: 3200,
        image: "assets/prop_2.jpg",
        featured: true,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Private Garden", "Swimming Pool", "Modern Gym", "24/7 Security", "Clubhouse", "Pet Friendly"],
        agent: {
            name: "Rahul Deshmukh",
            phone: "+91 98111 22233",
            email: "rahul.deshmukh@lotlite.com",
            avatar: "RD"
        },
        description: "Superb 4 BHK semi-furnished independent villa in Wakad. Includes a private landscaped backyard garden, spacious master suite with wooden flooring, premium bath fixtures, and modular kitchen fittings.",
        mapX: 14,
        mapY: 28
    },
    {
        id: "prop-pune-13",
        title: "Ganga Cypress Luxury Bungalows",
        price: 29000000,
        priceDisplay: "₹2.9 Crore",
        location: "Tathawade, Pune",
        type: "Villa",
        purpose: "buy",
        bhk: 4,
        baths: 4,
        area: 2850,
        image: "assets/prop_2.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Private Garden", "Power Backup", "24/7 Security", "Clubhouse", "Parking"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "Charming 4 BHK independent bungalow in Tathawade. Spacious rooms, wide balconies, personal water storage tanks, private car porch, and lawn. Quick connectivity to Hinjawadi IT parks and educational institutes.",
        mapX: 11,
        mapY: 25
    },
    {
        id: "prop-pune-14",
        title: "Silver Birch Residency Villa",
        price: 24000000,
        priceDisplay: "₹2.4 Crore",
        location: "Punawale, Pune",
        type: "Villa",
        purpose: "buy",
        bhk: 3,
        baths: 3,
        area: 2400,
        image: "assets/prop_2.jpg",
        featured: false,
        furnishing: "Furnished",
        constructionStatus: "Under Construction",
        age: "0-1 Years",
        amenities: ["Private Garden", "Modern Gym", "24/7 Security", "Clubhouse", "Power Backup"],
        agent: {
            name: "Pooja Mehta",
            phone: "+91 98111 22244",
            email: "pooja.mehta@lotlite.com",
            avatar: "PM"
        },
        description: "Elegant 3 BHK villa currently under construction in Punawale. Features premium modern fittings, floor-to-ceiling glass doors, and a private garden area. Great investment potential in West Pune's growth corridor.",
        mapX: 7,
        mapY: 28
    },
    {
        id: "prop-pune-15",
        title: "Royal Palms Villa Estate",
        price: 38500000,
        priceDisplay: "₹3.85 Crore",
        location: "Ravet, Pune",
        type: "Villa",
        purpose: "buy",
        bhk: 5,
        baths: 5,
        area: 4100,
        image: "assets/prop_2.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Private Garden", "Swimming Pool", "Modern Gym", "24/7 Security", "Clubhouse", "Pet Friendly", "Home Theatre"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "A gorgeous 5 BHK luxury villa in Ravet. Completely furnished with custom wood carvings, private splash pool, separate AV room/home theatre, modular Italian kitchen, and servant outhouse. Fully secure gated society.",
        mapX: 6,
        mapY: 22
    },
    {
        id: "prop-pune-16",
        title: "Bavdhan Hills Duplex Bungalow",
        price: 42000000,
        priceDisplay: "₹4.2 Crore",
        location: "Bavdhan, Pune",
        type: "Villa",
        purpose: "buy",
        bhk: 4,
        baths: 5,
        area: 3600,
        image: "assets/prop_2.jpg",
        featured: false,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "5-10 Years",
        amenities: ["Private Garden", "Home Automation", "Power Backup", "24/7 Security", "Clubhouse", "Parking"],
        agent: {
            name: "Vikram Malhotra",
            phone: "+91 98111 22266",
            email: "vikram@lotlite.com",
            avatar: "VM"
        },
        description: "A spacious 4 BHK duplex bungalow nested in Bavdhan Hills. Overlooking deep green valleys. Comes fully furnished with high-end colonial styling, custom teak wood doors, double-height ceilings, and servant quarters.",
        mapX: 28,
        mapY: 52
    },
    {
        id: "prop-pune-17",
        title: "Baner Crest Elite Villas",
        price: 55000000,
        priceDisplay: "₹5.5 Crore",
        location: "Baner, Pune",
        type: "Villa",
        purpose: "buy",
        bhk: 5,
        baths: 6,
        area: 4800,
        image: "assets/prop_2.jpg",
        featured: true,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "0-1 Years",
        amenities: ["Private Garden", "Swimming Pool", "Home Automation", "24/7 Security", "Clubhouse", "Gym"],
        agent: {
            name: "Vikram Malhotra",
            phone: "+91 98111 22266",
            email: "vikram@lotlite.com",
            avatar: "VM"
        },
        description: "Ultra luxury 5 BHK villa in the premium locality of Baner. Includes automated ambient lighting controls, VRV central AC system, an expansive lawn, automated main gates, and private elevator access.",
        mapX: 20,
        mapY: 36
    },
    {
        id: "prop-pune-18",
        title: "Vantage Tower Offices",
        price: 12000000,
        priceDisplay: "₹1.2 Crore",
        location: "Hinjawadi Phase 1, Pune",
        type: "Commercial",
        purpose: "buy",
        bhk: null,
        baths: 2,
        area: 1500,
        image: "assets/prop_3.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Fiber Internet", "Central AC", "Conference Room", "Power Backup", "24/7 Security", "Elevator"],
        agent: {
            name: "Rahul Deshmukh",
            phone: "+91 98111 22233",
            email: "rahul.deshmukh@lotlite.com",
            avatar: "RD"
        },
        description: "Corporate-ready fully furnished 1500 sq.ft. office suite in Hinjawadi Phase 1. Features 20 workspaces, a glass-partitioned conference room, private director's cabin, fully functioning pantry, and server station.",
        mapX: 13,
        mapY: 38
    },
    {
        id: "prop-pune-19",
        title: "Westside Commercial Hub Shop",
        price: 85000,
        priceDisplay: "₹85,000/mo",
        location: "Wakad, Pune",
        type: "Commercial",
        purpose: "rent",
        bhk: null,
        baths: 2,
        area: 1100,
        image: "assets/prop_3.jpg",
        featured: false,
        furnishing: "Semi-Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["High Footfall", "Central AC", "Power Backup", "24/7 Security", "Parking"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "Prime retail/commercial shop space located on Wakad Main Road. Highly visible double-glass frontage, high ceilings, semi-furnished setup with ducting, and excellent parking spaces for walk-in retail clients.",
        mapX: 15,
        mapY: 34
    },
    {
        id: "prop-pune-20",
        title: "TechPark Central Suites",
        price: 150000,
        priceDisplay: "₹1.5 Lakh/mo",
        location: "Hinjawadi Phase 3, Pune",
        type: "Commercial",
        purpose: "rent",
        bhk: null,
        baths: 4,
        area: 2800,
        image: "assets/prop_3.jpg",
        featured: false,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "0-1 Years",
        amenities: ["Fiber Internet", "Central AC", "Conference Room", "Power Backup", "Elevator", "24/7 Security"],
        agent: {
            name: "Rahul Deshmukh",
            phone: "+91 98111 22233",
            email: "rahul.deshmukh@lotlite.com",
            avatar: "RD"
        },
        description: "Large 2800 sq.ft. corporate office suite in Hinjawadi Phase 3 IT complex. Fully set up with modular workstations (40 seats), two meeting rooms, reception lobby, server rack, and complete central air conditioning.",
        mapX: 8,
        mapY: 40
    },
    {
        id: "prop-pune-21",
        title: "Supreme Plaza Retail Storefront",
        price: 16500000,
        priceDisplay: "₹1.65 Crore",
        location: "Ravet, Pune",
        type: "Commercial",
        purpose: "buy",
        bhk: null,
        baths: 1,
        area: 950,
        image: "assets/prop_3.jpg",
        featured: false,
        furnishing: "Unfurnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["High Footfall", "Parking", "Power Backup", "24/7 Security"],
        agent: {
            name: "Pooja Mehta",
            phone: "+91 98111 22244",
            email: "pooja.mehta@lotlite.com",
            avatar: "PM"
        },
        description: "Ready-to-move unfurnished retail space in Ravet's busy commercial strip. Corner property with dual-side road visibility. Ideal layout for banks, brand showrooms, pharmacies, or organic grocery stores.",
        mapX: 5,
        mapY: 25
    },
    {
        id: "prop-pune-22",
        title: "Balewadi High Street Elite Office",
        price: 22000000,
        priceDisplay: "₹2.2 Crore",
        location: "Balewadi, Pune",
        type: "Commercial",
        purpose: "buy",
        bhk: null,
        baths: 2,
        area: 1800,
        image: "assets/prop_3.jpg",
        featured: true,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Fiber Internet", "Central AC", "Conference Room", "High Footfall", "Power Backup", "Elevator"],
        agent: {
            name: "Vikram Malhotra",
            phone: "+91 98111 22266",
            email: "vikram@lotlite.com",
            avatar: "VM"
        },
        description: "Exquisite commercial office suite directly on Balewadi High Street. Furnished with designer glass desks, high-speed network cabling, reception, direct elevator access, and reserved underground basement parking spots.",
        mapX: 25,
        mapY: 36
    },
    {
        id: "prop-pune-23",
        title: "Bavdhan Corporate Park Suite",
        price: 125000,
        priceDisplay: "₹1.25 Lakh/mo",
        location: "Bavdhan, Pune",
        type: "Commercial",
        purpose: "rent",
        bhk: null,
        baths: 3,
        area: 2200,
        image: "assets/prop_3.jpg",
        featured: false,
        furnishing: "Furnished",
        constructionStatus: "Ready to Move",
        age: "1-5 Years",
        amenities: ["Fiber Internet", "Central AC", "Conference Room", "Power Backup", "24/7 Security", "Elevator"],
        agent: {
            name: "Amit Kulkarni",
            phone: "+91 98111 22255",
            email: "amit.kulkarni@lotlite.com",
            avatar: "AK"
        },
        description: "Fully loaded commercial office unit in Bavdhan with excellent highway exposure. Features 25 desk spaces, boardroom, executive cabins, fully set up pantry area, and reliable uninterrupted power and internet feeds.",
        mapX: 27,
        mapY: 48
    }
]

// 2. STATE MANAGER
class AppState {
    constructor() {
        this.properties = [...SEED_PROPERTIES];
        this.favorites = [];
        this.filters = {
            purpose: 'buy', // 'buy' or 'rent'
            location: '',
            type: 'All', // 'All', 'Apartment', 'Villa', 'Plot', 'Commercial'
            price: 60000000, // Max price range
            bhk: 'All', // 'All', 1, 2, 3, 4
            furnishing: 'All', // 'All', 'Furnished', 'Semi-Furnished', 'Unfurnished'
            status: 'All' // 'All', 'Ready to Move', 'Under Construction'
        };
        this.sortOption = 'featured'; // 'featured', 'price-asc', 'price-desc', 'area-desc'
        
        // Session & Auth
        this.session = {
            currentUser: null,
            isLoggedIn: false
        };
        this.users = [];
        this.leads = [];
        this.siteVisits = [];
        this.chats = {};
        this.activeChatUserId = null;

        this.init();
    }

    init() {
        // Load favorites from local storage
        const savedFavs = localStorage.getItem('lotlite_favorites');
        if (savedFavs) {
            this.favorites = JSON.parse(savedFavs);
        }

        // Load custom user properties from local storage
        const savedProps = localStorage.getItem('lotlite_user_properties');
        if (savedProps) {
            const userProps = JSON.parse(savedProps);
            this.properties = [...this.properties, ...userProps];
        }

        // Load users database or seed defaults
        const savedUsers = localStorage.getItem('lotlite_users_db');
        if (savedUsers) {
            this.users = JSON.parse(savedUsers);
        } else {
            this.seedUsers();
        }

        // Load active session from local storage
        const savedSession = localStorage.getItem('lotlite_user_session');
        if (savedSession) {
            this.session = JSON.parse(savedSession);
        }

        // Load leads or seed defaults
        const savedLeads = localStorage.getItem('lotlite_leads_db');
        if (savedLeads) {
            this.leads = JSON.parse(savedLeads);
        } else {
            this.seedLeads();
        }

        // Load site visits or seed defaults
        const savedVisits = localStorage.getItem('lotlite_site_visits_db');
        if (savedVisits) {
            this.siteVisits = JSON.parse(savedVisits);
        } else {
            this.seedSiteVisits();
        }

        // Load chats or seed defaults
        const savedChats = localStorage.getItem('lotlite_chats_db');
        if (savedChats) {
            this.chats = JSON.parse(savedChats);
        } else {
            this.seedChats();
        }
    }

    seedUsers() {
        this.users = [
            {
                name: "Rahul Deshmukh",
                email: "agent@lotlite.com",
                phone: "+91 98111 22233",
                password: "password123",
                role: "Agent",
                avatar: "RD"
            },
            {
                name: "Amit Kulkarni",
                email: "owner@lotlite.com",
                phone: "+91 98111 22255",
                password: "password123",
                role: "Owner",
                avatar: "AK"
            },
            {
                name: "Vikram Malhotra",
                email: "buyer@lotlite.com",
                phone: "+91 98111 22266",
                password: "password123",
                role: "Buyer",
                avatar: "VM"
            }
        ];
        localStorage.setItem('lotlite_users_db', JSON.stringify(this.users));
    }

    seedLeads() {
        this.leads = [
            {
                id: "lead-1",
                name: "Rajiv Shah",
                email: "rajiv@shah.com",
                phone: "+91 99887 76655",
                propertyId: "prop-1",
                propertyName: "Skyline Oasis Apartments",
                status: "Interested",
                date: "2026-06-04",
                agentEmail: "rajesh@lotlite.com"
            },
            {
                id: "lead-2",
                name: "Preeti Patel",
                email: "preeti@patel.com",
                phone: "+91 98765 54321",
                propertyId: "prop-2",
                propertyName: "Whispering Pines Luxury Villa",
                status: "Contacted",
                date: "2026-06-05",
                agentEmail: "neha@lotlite.com"
            },
            {
                id: "lead-3",
                name: "Devendra Joshi",
                email: "dev@joshi.com",
                phone: "+91 99911 22233",
                propertyId: "prop-pune-1",
                propertyName: "Kolte-Patil Life Republic",
                status: "New",
                date: "2026-06-05",
                agentEmail: "agent@lotlite.com"
            },
            {
                id: "lead-4",
                name: "Anjali Gupta",
                email: "anjali@gupta.com",
                phone: "+91 98888 77777",
                propertyId: "prop-pune-3",
                propertyName: "VTP Blue Waters Sky-Condo",
                status: "Contacted",
                date: "2026-06-03",
                agentEmail: "owner@lotlite.com"
            }
        ];
        localStorage.setItem('lotlite_leads_db', JSON.stringify(this.leads));
    }

    seedSiteVisits() {
        this.siteVisits = [
            {
                id: "visit-1",
                name: "Preeti Patel",
                propertyAddress: "Sohna Road, Gurgaon",
                propertyId: "prop-2",
                time: "2026-06-10 11:00 AM",
                status: "Confirmed",
                agentEmail: "neha@lotlite.com"
            },
            {
                id: "visit-2",
                name: "Rajiv Shah",
                propertyAddress: "Sector 62, Noida",
                propertyId: "prop-1",
                time: "2026-06-12 04:00 PM",
                status: "Pending",
                agentEmail: "rajesh@lotlite.com"
            },
            {
                id: "visit-3",
                name: "Vikram Malhotra",
                propertyAddress: "Koregaon Park, Pune",
                propertyId: "prop-pune-4",
                time: "2026-06-08 02:00 PM",
                status: "Completed",
                agentEmail: "agent@lotlite.com"
            },
            {
                id: "visit-4",
                name: "Devendra Joshi",
                propertyAddress: "Hinjawadi, Pune",
                propertyId: "prop-pune-1",
                time: "2026-06-07 10:00 AM",
                status: "Confirmed",
                agentEmail: "agent@lotlite.com"
            }
        ];
        localStorage.setItem('lotlite_site_visits_db', JSON.stringify(this.siteVisits));
    }

    seedChats() {
        this.chats = {
            "buyer@lotlite.com": [
                { sender: "RD", message: "Hi Vikram, are you still interested in Trump Towers?", time: "June 4, 4:00 PM" },
                { sender: "VM", message: "Yes, I am planning a visit next Monday.", time: "June 4, 4:02 PM" }
            ],
            "rajiv@shah.com": [
                { sender: "RS", message: "Hello, what is the down payment option for Skyline Oasis?", time: "June 5, 9:30 AM" },
                { sender: "RD", message: "Hi Rajiv! Normally 20% down payment is standard. You can use our calculator on the property details page for custom figures.", time: "June 5, 9:45 AM" }
            ],
            "preeti@patel.com": [
                { sender: "PP", message: "Is Sohna Road villa negotiable?", time: "June 5, 10:00 AM" },
                { sender: "RD", message: "Hi Preeti, yes the owner is open to close offers. Let's arrange a site visit first.", time: "June 5, 10:15 AM" }
            ]
        };
        localStorage.setItem('lotlite_chats_db', JSON.stringify(this.chats));
    }

    signup(name, email, phone, password, role) {
        // Check if user already exists
        const exists = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (exists) {
            return { success: false, message: "Email is already registered" };
        }

        // Get initials for avatar
        const parts = name.split(" ");
        const avatar = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].substring(0, 2).toUpperCase();

        const newUser = { name, email, phone, password, role, avatar };
        this.users.push(newUser);
        localStorage.setItem('lotlite_users_db', JSON.stringify(this.users));
        
        return { success: true, message: "Account created successfully!" };
    }

    login(email, password, remember) {
        const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
        if (!user) {
            return { success: false, message: "Invalid email or password" };
        }

        this.session = {
            currentUser: user,
            isLoggedIn: true
        };

        if (remember) {
            localStorage.setItem('lotlite_user_session', JSON.stringify(this.session));
        } else {
            localStorage.removeItem('lotlite_user_session');
        }

        this.showNotification("Signed In", `Welcome back, ${user.name}!`);
        window.dispatchEvent(new CustomEvent('authChanged'));
        return { success: true };
    }

    logout() {
        this.session = {
            currentUser: null,
            isLoggedIn: false
        };
        localStorage.removeItem('lotlite_user_session');
        this.showNotification("Signed Out", "You have logged out of your session.");
        window.dispatchEvent(new CustomEvent('authChanged'));
    }

    updateProfile(name, phone) {
        if (!this.session.isLoggedIn) return { success: false };

        const email = this.session.currentUser.email;
        const userIndex = this.users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
        if (userIndex !== -1) {
            this.users[userIndex].name = name;
            this.users[userIndex].phone = phone;
            localStorage.setItem('lotlite_users_db', JSON.stringify(this.users));
            
            // Update session
            this.session.currentUser.name = name;
            this.session.currentUser.phone = phone;
            localStorage.setItem('lotlite_user_session', JSON.stringify(this.session));
            
            this.showNotification("Profile Updated", "Your changes have been saved successfully.");
            window.dispatchEvent(new CustomEvent('authChanged'));
            return { success: true };
        }
        return { success: false };
    }

    getCurrentUserProperties() {
        if (!this.session.isLoggedIn) return [];
        const email = this.session.currentUser.email.toLowerCase();
        
        // Return properties where agent/owner email matches current user email
        return this.properties.filter(p => p.agent && p.agent.email.toLowerCase() === email);
    }

    toggleFavorite(id) {
        const index = this.favorites.indexOf(id);
        if (index === -1) {
            this.favorites.push(id);
            this.showNotification("Property Saved", "Added to your favorites list.");
        } else {
            this.favorites.splice(index, 1);
            this.showNotification("Property Removed", "Removed from your favorites list.");
        }
        localStorage.setItem('lotlite_favorites', JSON.stringify(this.favorites));
        
        // Dispatch custom event to trigger re-renders
        window.dispatchEvent(new CustomEvent('favoritesUpdated'));
    }

    addCustomProperty(property) {
        // Link property to current logged-in user if available
        if (this.session.isLoggedIn) {
            property.agent = {
                name: this.session.currentUser.name,
                phone: this.session.currentUser.phone,
                email: this.session.currentUser.email,
                avatar: this.session.currentUser.avatar
            };
        }
        
        this.properties.unshift(property); // Add to beginning of array

        // Persist only custom properties
        const savedProps = localStorage.getItem('lotlite_user_properties');
        let userProps = savedProps ? JSON.parse(savedProps) : [];
        userProps.unshift(property);
        localStorage.setItem('lotlite_user_properties', JSON.stringify(userProps));

        this.showNotification("Listing Published!", "Your property is now live.");
    }

    getFilteredProperties() {
        return this.properties.filter(prop => {
            // Purpose (Buy / Rent)
            if (this.filters.purpose && prop.purpose !== this.filters.purpose) return false;

            // Location Search (Case-insensitive match)
            if (this.filters.location && !prop.location.toLowerCase().includes(this.filters.location.toLowerCase())) return false;

            // Type Match
            if (this.filters.type !== 'All' && prop.type !== this.filters.type) return false;

            // Price Match
            if (prop.price > this.filters.price) return false;

            // BHK Match
            if (this.filters.bhk !== 'All') {
                const targetBHK = parseInt(this.filters.bhk);
                if (targetBHK === 4) {
                    if (prop.bhk < 4) return false; // 4+ BHK
                } else if (prop.bhk !== targetBHK) {
                    return false;
                }
            }

            // Furnishing Match
            if (this.filters.furnishing !== 'All' && prop.furnishing !== this.filters.furnishing) return false;

            // Status Match
            if (this.filters.status !== 'All' && prop.constructionStatus !== this.filters.status) return false;

            return true;
        }).sort((a, b) => {
            if (this.sortOption === 'featured') {
                return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
            } else if (this.sortOption === 'price-asc') {
                return a.price - b.price;
            } else if (this.sortOption === 'price-desc') {
                return b.price - a.price;
            } else if (this.sortOption === 'area-desc') {
                return b.area - a.area;
            }
            return 0;
        });
    }

    showNotification(title, message) {
        const notif = document.getElementById('notification-toast');
        if (!notif) return;
        
        notif.querySelector('h4').textContent = title;
        notif.querySelector('p').textContent = message;
        notif.classList.add('active');
        
        setTimeout(() => {
            notif.classList.remove('active');
        }, 3500);
    }
}

// Instantiate global state
const state = new AppState();

// 3. UI RENDERING ENGINES
const UI = {
    // Generate Property Card HTML
    createCardHTML(prop) {
        const isFav = state.favorites.includes(prop.id) ? 'active' : '';
        const specBHK = prop.bhk ? `${prop.bhk} BHK` : 'Plot/Space';
        const specBaths = prop.baths ? `${prop.baths} Baths` : '1-2 Baths';
        const purposeLabel = prop.purpose === 'buy' ? 'For Sale' : 'For Rent';
        const purposeClass = prop.purpose === 'buy' ? 'type-sell' : 'type-rent';
        
        return `
            <div class="property-card" data-id="${prop.id}">
                <div class="card-img-wrapper" onclick="UI.navigateToProperty('${prop.id}')">
                    <img src="${prop.image}" alt="${prop.title}">
                    <div class="card-badges">
                        <span class="card-badge ${purposeClass}">${purposeLabel}</span>
                        ${prop.featured ? '<span class="card-badge featured">Premium</span>' : ''}
                    </div>
                    <button class="card-favorite-btn ${isFav}" data-id="${prop.id}" aria-label="Add to favorites">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <div class="card-price-overlay">${prop.priceDisplay}</div>
                </div>
                
                <div class="card-content">
                    <div class="card-property-type">${prop.type} • ${prop.furnishing}</div>
                    <h3 class="card-title" onclick="UI.navigateToProperty('${prop.id}')">${prop.title}</h3>
                    <div class="card-location">
                        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span>${prop.location}</span>
                    </div>
                    
                    <div class="card-specs">
                        <div class="card-spec-item">
                            <svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                            <span>${specBHK}</span>
                        </div>
                        <div class="card-spec-item">
                            <svg viewBox="0 0 24 24"><path d="M20 13V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v9H2v7h20v-7h-2zM4 18v-3h6v3H4zm16 0h-8v-3h8v3z"/></svg>
                            <span>${specBaths}</span>
                        </div>
                        <div class="card-spec-item">
                            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                            <span>${prop.area} Sq.Ft.</span>
                        </div>
                    </div>
                    
                    <div class="card-footer">
                        <div class="card-agent">
                            <div class="card-agent-img">${prop.agent.avatar}</div>
                            <div class="card-agent-info">
                                <h4>${prop.agent.name}</h4>
                                <p>${prop.type === 'Plot' ? 'Owner' : 'Agent'}</p>
                            </div>
                        </div>
                        <button class="btn-secondary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="UI.navigateToProperty('${prop.id}')">View</button>
                    </div>
                </div>
            </div>
        `;
    },

    // Navigate helper
    navigateToProperty(id) {
        window.location.hash = `#property?id=${id}`;
    },

    // Render Home View Carousel
    renderFeatured() {
        const featuredContainer = document.getElementById('featured-property-grid');
        if (!featuredContainer) return;
        
        const featuredProps = state.properties.filter(p => p.featured).slice(0, 3);
        if (featuredProps.length === 0) {
            featuredContainer.innerHTML = `<div class="empty-state"><h3>No featured properties found</h3></div>`;
            return;
        }

        featuredContainer.innerHTML = featuredProps.map(p => this.createCardHTML(p)).join('');
        this.bindCardEvents(featuredContainer);
    },

    // Render Search/Listings List & Map Pins
    renderListings() {
        const resultsGrid = document.getElementById('listings-results-grid');
        const resultsCountEl = document.getElementById('results-count');
        const mapContainer = document.getElementById('map-pins-overlay');
        
        if (!resultsGrid) return;

        const filtered = state.getFilteredProperties();
        resultsCountEl.textContent = `${filtered.length} Properties found`;

        if (filtered.length === 0) {
            resultsGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    <h3>No Matches Found</h3>
                    <p>Try resetting filters or adjusting search parameters to explore other areas.</p>
                    <button class="btn-primary" onclick="UI.resetFilters()">Reset All Filters</button>
                </div>
            `;
            if (mapContainer) mapContainer.innerHTML = '';
            return;
        }

        resultsGrid.innerHTML = filtered.map(p => this.createCardHTML(p)).join('');
        this.bindCardEvents(resultsGrid);
        
        // Render Pins on Map
        if (mapContainer) {
            this.renderMapPins(filtered, mapContainer);
        }
    },

    // Render Map Pins
    renderMapPins(properties, container) {
        container.innerHTML = '';
        properties.forEach(prop => {
            const pin = document.createElement('div');
            pin.className = 'map-pin';
            pin.style.left = `${prop.mapX}%`;
            pin.style.top = `${prop.mapY}%`;
            pin.setAttribute('data-id', prop.id);
            
            // Render nice looking pricing markers
            pin.innerHTML = `
                <div class="pin-marker">
                    ${prop.priceDisplay}
                </div>
            `;
            
            // Hover logic linked between map pin & listing card
            pin.addEventListener('mouseenter', () => {
                const card = document.querySelector(`.property-card[data-id="${prop.id}"]`);
                if (card) card.style.borderColor = 'var(--primary)';
                pin.classList.add('active');
            });
            pin.addEventListener('mouseleave', () => {
                const card = document.querySelector(`.property-card[data-id="${prop.id}"]`);
                if (card) card.style.borderColor = '';
                pin.classList.remove('active');
            });
            
            // Click opens popover card
            pin.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showMapPopover(prop);
            });
            
            container.appendChild(pin);
        });
    },

    // Show Map Popover Overlay
    showMapPopover(prop) {
        const popover = document.getElementById('map-popover-card');
        if (!popover) return;
        
        popover.querySelector('.popover-img').src = prop.image;
        popover.querySelector('.popover-title').textContent = prop.title;
        popover.querySelector('.popover-price').textContent = prop.priceDisplay;
        popover.querySelector('.popover-view-btn').onclick = () => this.navigateToProperty(prop.id);
        
        popover.classList.add('active');
        
        // Highlight corresponding marker
        document.querySelectorAll('.map-pin').forEach(pin => {
            if (pin.getAttribute('data-id') === prop.id) {
                pin.classList.add('active');
            } else {
                pin.classList.remove('active');
            }
        });
    },

    hideMapPopover() {
        const popover = document.getElementById('map-popover-card');
        if (popover) popover.classList.remove('active');
        
        document.querySelectorAll('.map-pin').forEach(pin => {
            pin.classList.remove('active');
        });
    },

    // Render Favorites View
    renderFavorites() {
        const favsGrid = document.getElementById('favorites-results-grid');
        if (!favsGrid) return;
        
        const favProperties = state.properties.filter(p => state.favorites.includes(p.id));
        
        if (favProperties.length === 0) {
            favsGrid.innerHTML = `
                <div class="empty-state">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    <h3>Your favorites list is empty</h3>
                    <p>Bookmark premium properties while browsing to access them later instantly.</p>
                    <a href="#search" class="btn-primary">Browse Properties</a>
                </div>
            `;
            return;
        }

        favsGrid.innerHTML = favProperties.map(p => this.createCardHTML(p)).join('');
        this.bindCardEvents(favsGrid);
    },

    // Render Property Detailed View Page
    renderPropertyDetail(id) {
        const prop = state.properties.find(p => p.id === id);
        const detailContainer = document.getElementById('property-detail-container');
        if (!detailContainer) return;

        if (!prop) {
            detailContainer.innerHTML = `
                <div class="empty-state">
                    <h3>Property Not Found</h3>
                    <p>The requested listing could not be found or has been taken down.</p>
                    <a href="#search" class="btn-primary">Back to Listings</a>
                </div>
            `;
            return;
        }

        const isFav = state.favorites.includes(prop.id) ? 'active' : '';
        const specBHK = prop.bhk ? `${prop.bhk} BHK` : 'Plot / Space';
        const specBaths = prop.baths ? `${prop.baths} Bathrooms` : '1-2 Bathrooms';
        const purposeLabel = prop.purpose === 'buy' ? 'For Sale' : 'For Rent';
        const purposeClass = prop.purpose === 'buy' ? 'type-sell' : 'type-rent';
        
        // Generate list of amenities dynamically
        const amenitiesHTML = prop.amenities.map(a => `
            <div class="amenity-tag">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span>${a}</span>
            </div>
        `).join('');

        detailContainer.innerHTML = `
            <div class="details-back-nav" onclick="window.history.back()">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                <span>Back to listings</span>
            </div>

            <div class="details-header-row">
                <div class="details-title-block">
                    <h1>${prop.title}</h1>
                    <div class="details-address-block">
                        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span>${prop.location}</span>
                    </div>
                </div>
                <div class="details-price-block">
                    <span class="details-price">${prop.priceDisplay}</span>
                    <span class="details-price-meta">Est. ₹${Math.round(prop.price / 100).toLocaleString('en-IN')}/sq.ft. • ${purposeLabel}</span>
                </div>
            </div>

            <!-- Image Gallery -->
            <div class="details-gallery">
                <div class="gallery-main">
                    <img src="${prop.image}" alt="${prop.title}">
                </div>
                <div class="gallery-side">
                    <div class="gallery-side-img"><img src="assets/prop_1.jpg" alt="Interior View"></div>
                    <div class="gallery-side-img"><img src="assets/prop_3.jpg" alt="Amenities Design"></div>
                </div>
            </div>

            <!-- Primary Grid -->
            <div class="details-grid">
                <div class="details-main-content">
                    
                    <!-- Specifications Badge Grid -->
                    <div class="details-specs-badge-grid">
                        <div class="detail-spec-box">
                            <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                            <span class="detail-spec-value">${prop.area} sq.ft.</span>
                            <span class="detail-spec-label">Carpet Area</span>
                        </div>
                        <div class="detail-spec-box">
                            <svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                            <span class="detail-spec-value">${specBHK}</span>
                            <span class="detail-spec-label">Configuration</span>
                        </div>
                        <div class="detail-spec-box">
                            <svg viewBox="0 0 24 24"><path d="M20 13V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v9H2v7h20v-7h-2zM4 18v-3h6v3H4zm16 0h-8v-3h8v3z"/></svg>
                            <span class="detail-spec-value">${specBaths}</span>
                            <span class="detail-spec-label">Baths</span>
                        </div>
                        <div class="detail-spec-box">
                            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                            <span class="detail-spec-value">${prop.constructionStatus}</span>
                            <span class="detail-spec-label">Status</span>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="details-description-box">
                        <h3>About this property</h3>
                        <p>${prop.description}</p>
                    </div>

                    <!-- Amenities -->
                    <div class="details-amenities-box">
                        <h3>Facilities & Amenities</h3>
                        <div class="amenities-tag-list">
                            ${amenitiesHTML}
                        </div>
                    </div>

                    <!-- EMI Calculator Section (Interactive) -->
                    <div class="details-emi-box">
                        <h3>Home Loan & Monthly EMI Calculator</h3>
                        <div class="emi-calculator-card">
                            <div class="emi-inputs">
                                <div class="emi-input-group">
                                    <label>Down Payment (₹): <span id="val-emi-down">₹0</span></label>
                                    <input type="range" class="range-slider" id="input-emi-down" min="0" max="${Math.round(prop.price * 0.9)}" step="50000" value="${Math.round(prop.price * 0.2)}">
                                </div>
                                <div class="emi-input-group">
                                    <label>Interest Rate (%): <span id="val-emi-interest">8.5%</span></label>
                                    <input type="range" class="range-slider" id="input-emi-interest" min="5" max="15" step="0.1" value="8.5">
                                </div>
                                <div class="emi-input-group">
                                    <label>Tenure (Years): <span id="val-emi-tenure">20 Years</span></label>
                                    <input type="range" class="range-slider" id="input-emi-tenure" min="5" max="30" step="1" value="20">
                                </div>
                            </div>
                            <div class="emi-results">
                                <h4>Estimated Monthly Payment</h4>
                                <div class="emi-monthly-val" id="emi-monthly-output">₹0</div>
                                <div class="emi-detail-breakdown">
                                    <span>Principal Loan: <strong id="emi-principal-val">₹0</strong></span>
                                    <span>Total Interest Paid: <strong id="emi-total-interest">₹0</strong></span>
                                    <span>Total Payable: <strong id="emi-total-payable">₹0</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Right Sidebar Contact Panel -->
                <div>
                    <div class="details-sidebar-card">
                        <div class="contact-agent-badge">
                            <div class="agent-large-avatar">${prop.agent.avatar}</div>
                            <div class="agent-large-info">
                                <h4>${prop.agent.name}</h4>
                                <p>${prop.type === 'Plot' ? 'Developer Team' : 'Verified LotLite Agent'}</p>
                            </div>
                        </div>
                        
                        <div class="contact-form">
                            <div class="form-group">
                                <label for="contact-name">Your Name</label>
                                <input type="text" id="contact-name" placeholder="John Doe" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-email">Email Address</label>
                                <input type="email" id="contact-email" placeholder="john@example.com" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-phone">Phone Number</label>
                                <input type="tel" id="contact-phone" placeholder="+91 98765 XXXXX" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-msg">Message</label>
                                <textarea id="contact-msg">I am interested in "${prop.title}" (${prop.id}). Please contact me with more information.</textarea>
                            </div>
                            <button class="btn-primary" style="justify-content: center; width:100%" onclick="UI.submitContactForm('${prop.agent.name}')">Contact Agent</button>
                        </div>
                    </div>
                </div>

            </div>
        `;

        // Initialize EMI calculator events
        this.initEMICalculator(prop.price);
    },

    // Bind Favorite button events in lists
    bindCardEvents(container) {
        container.querySelectorAll('.card-favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                state.toggleFavorite(id);
                
                // Toggle active class visually immediately
                btn.classList.toggle('active');
            });
        });
        
        // Link listing hover to map markers highlight
        container.querySelectorAll('.property-card').forEach(card => {
            const id = card.getAttribute('data-id');
            card.addEventListener('mouseenter', () => {
                const marker = document.querySelector(`.map-pin[data-id="${id}"]`);
                if (marker) marker.classList.add('active');
            });
            card.addEventListener('mouseleave', () => {
                const marker = document.querySelector(`.map-pin[data-id="${id}"]`);
                if (marker) marker.classList.remove('active');
            });
        });
    },

    // EMI Calculator Logic
    initEMICalculator(propertyPrice) {
        const inputDown = document.getElementById('input-emi-down');
        const inputInterest = document.getElementById('input-emi-interest');
        const inputTenure = document.getElementById('input-emi-tenure');
        
        const valDown = document.getElementById('val-emi-down');
        const valInterest = document.getElementById('val-emi-interest');
        const valTenure = document.getElementById('val-emi-tenure');

        const emiOutput = document.getElementById('emi-monthly-output');
        const emiPrincipal = document.getElementById('emi-principal-val');
        const emiInterest = document.getElementById('emi-total-interest');
        const emiPayable = document.getElementById('emi-total-payable');

        if (!inputDown) return;

        const calculate = () => {
            const downPayment = parseInt(inputDown.value);
            const interestAnnual = parseFloat(inputInterest.value);
            const tenureYears = parseInt(inputTenure.value);

            // Update sliders labels
            valDown.textContent = `₹${downPayment.toLocaleString('en-IN')}`;
            valInterest.textContent = `${interestAnnual}%`;
            valTenure.textContent = `${tenureYears} Years`;

            // Core Formula
            const principal = propertyPrice - downPayment;
            const monthlyRate = (interestAnnual / 12) / 100;
            const totalMonths = tenureYears * 12;

            let emi = 0;
            if (monthlyRate === 0) {
                emi = principal / totalMonths;
            } else {
                emi = principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
            }

            const totalPayable = emi * totalMonths;
            const totalInterest = totalPayable - principal;

            // Render Output
            emiOutput.textContent = `₹${Math.round(emi).toLocaleString('en-IN')}/mo`;
            emiPrincipal.textContent = `₹${Math.round(principal).toLocaleString('en-IN')}`;
            emiInterest.textContent = `₹${Math.round(totalInterest).toLocaleString('en-IN')}`;
            emiPayable.textContent = `₹${Math.round(totalPayable).toLocaleString('en-IN')}`;
        };

        // Attach listeners
        inputDown.addEventListener('input', calculate);
        inputInterest.addEventListener('input', calculate);
        inputTenure.addEventListener('input', calculate);

        // Run initial calculation
        calculate();
    },

    // Contact Form Submission Simulation
    submitContactForm(agentName) {
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const phone = document.getElementById('contact-phone').value.trim();

        if (!name || !email || !phone) {
            state.showNotification("Required Fields", "Please fill in Name, Email and Phone.");
            return;
        }

        // Show mock confirmation
        state.showNotification("Message Sent!", `Agent ${agentName} will contact you shortly.`);
        
        // Reset form inputs
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-phone').value = '';
    },

    // Reset Search View Filters
    resetFilters() {
        state.filters = {
            purpose: 'buy',
            location: '',
            type: 'All',
            price: 60000000,
            bhk: 'All',
            furnishing: 'All',
            status: 'All'
        };
        
        // Reset inputs values in UI
        const inputPurposeBuy = document.getElementById('filter-purpose-buy');
        const inputPurposeRent = document.getElementById('filter-purpose-rent');
        if (inputPurposeBuy) {
            inputPurposeBuy.classList.add('active');
            inputPurposeRent.classList.remove('active');
        }

        const inputLoc = document.getElementById('filter-loc-input');
        if (inputLoc) inputLoc.value = '';

        const typePills = document.querySelectorAll('.type-pill');
        typePills.forEach(pill => {
            if (pill.getAttribute('data-val') === 'All') pill.classList.add('active');
            else pill.classList.remove('active');
        });

        const bhkPills = document.querySelectorAll('.bhk-pill');
        bhkPills.forEach(pill => {
            if (pill.getAttribute('data-val') === 'All') pill.classList.add('active');
            else pill.classList.remove('active');
        });

        const inputPrice = document.getElementById('filter-price-slider');
        if (inputPrice) {
            inputPrice.value = 60000000;
            document.getElementById('price-val-label').textContent = '₹6 Cr';
        }

        const selectFurnishing = document.getElementById('filter-furnishing-select');
        if (selectFurnishing) selectFurnishing.value = 'All';

        const selectStatus = document.getElementById('filter-status-select');
        if (selectStatus) selectStatus.value = 'All';

        // Re-render
        this.hideMapPopover();
        this.renderListings();
    },

    // Dynamic Header Auth State update
    updateHeader() {
        const authContainer = document.getElementById('header-auth-container');
        if (!authContainer) return;

        if (state.session.isLoggedIn) {
            const user = state.session.currentUser;
            authContainer.innerHTML = `
                <div class="header-user-menu" id="header-user-menu-trigger">
                    <div class="header-avatar">${user.avatar}</div>
                    <span class="header-username">${user.name}</span>
                    <div class="dropdown-menu glass-panel" id="header-user-dropdown">
                        <a href="#dashboard" class="dropdown-item">Dashboard</a>
                        <a href="#dashboard?tab=profile" class="dropdown-item">My Profile</a>
                        <a href="#dashboard?tab=saved" class="dropdown-item">Saved Properties</a>
                        <hr style="border:0; border-top:1px solid var(--border-color); margin:4px 0;">
                        <a href="#logout" class="dropdown-item logout-item" id="header-logout-btn">Logout</a>
                    </div>
                </div>
            `;

            // Setup Dropdown toggle event
            const trigger = document.getElementById('header-user-menu-trigger');
            if (trigger) {
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = document.getElementById('header-user-dropdown');
                    if (dropdown) dropdown.classList.toggle('active');
                });
            }
        } else {
            authContainer.innerHTML = `
                <a href="#login" class="btn-secondary" id="btn-header-login" style="padding: 8px 16px; font-size: 0.9rem;">Sign In</a>
            `;
        }
    },

    // Renders the entire Dashboard
    renderDashboard(activeTab = 'overview') {
        if (!state.session.isLoggedIn) {
            window.location.hash = '#login';
            return;
        }

        const user = state.session.currentUser;
        const isBuyer = user.role === 'Buyer';

        // 1. Sidebar role filter
        const listingsBtn = document.getElementById('sidebar-link-listings');
        const leadsBtn = document.getElementById('sidebar-link-leads');
        if (listingsBtn) listingsBtn.style.display = isBuyer ? 'none' : 'flex';
        if (leadsBtn) leadsBtn.style.display = isBuyer ? 'none' : 'flex';

        // 2. Set sidebar active state
        document.querySelectorAll('.sidebar-link').forEach(btn => {
            if (btn.getAttribute('data-tab') === activeTab) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 3. Set panel active state
        document.querySelectorAll('.dashboard-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        const targetPanel = document.getElementById(`panel-${activeTab}`);
        if (targetPanel) targetPanel.classList.add('active');

        // 4. Update titles
        const tabTitle = document.getElementById('dashboard-tab-title');
        const tabSubtitle = document.getElementById('dashboard-tab-subtitle');
        if (tabTitle && tabSubtitle) {
            const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
            tabTitle.textContent = `${capitalize(activeTab)} View`;
            tabSubtitle.textContent = `LotLite real-estate management console for ${user.role}s`;
            if (activeTab === 'overview') {
                tabTitle.textContent = "Overview Dashboard";
                tabSubtitle.textContent = `Welcome back to your LotLite management console, ${user.name}.`;
            }
        }

        // 5. Populate user display parameters
        const sideName = document.getElementById('sidebar-user-name');
        const sideRole = document.getElementById('sidebar-user-role');
        const sideAvatar = document.getElementById('sidebar-user-avatar');
        const headName = document.getElementById('header-user-display-name');
        const headAvatar = document.getElementById('header-user-avatar');

        if (sideName) sideName.textContent = user.name;
        if (sideRole) sideRole.textContent = user.role;
        if (sideAvatar) sideAvatar.textContent = user.avatar;
        if (headName) headName.textContent = user.name;
        if (headAvatar) headAvatar.textContent = user.avatar;

        // 6. Subpanel Data Rendering
        if (activeTab === 'overview') {
            // Update Card stats dynamically
            const statTotalProps = document.getElementById('stat-total-properties');
            const statSavedProps = document.getElementById('stat-saved-properties');
            const statTotalLeads = document.getElementById('stat-total-leads');
            const statSiteVisits = document.getElementById('stat-site-visits');

            // Total Properties
            let userPropsCount = 0;
            if (isBuyer) {
                userPropsCount = state.properties.length;
            } else {
                userPropsCount = state.getCurrentUserProperties().length;
            }
            if (statTotalProps) statTotalProps.textContent = userPropsCount;

            // Saved Properties count
            if (statSavedProps) statSavedProps.textContent = state.favorites.length;

            // Leads
            const email = user.email.toLowerCase();
            const relevantLeads = isBuyer ? [] : state.leads.filter(l => l.agentEmail.toLowerCase() === email);
            if (statTotalLeads) statTotalLeads.textContent = isBuyer ? 0 : relevantLeads.length;

            // Site visits
            const relevantVisits = isBuyer 
                ? state.siteVisits.filter(v => v.name.toLowerCase() === user.name.toLowerCase())
                : state.siteVisits.filter(v => v.agentEmail.toLowerCase() === email);
            if (statSiteVisits) statSiteVisits.textContent = relevantVisits.length;

            // Render Overview Leads list
            const leadsTbody = document.getElementById('dashboard-leads-tbody');
            if (leadsTbody) {
                if (isBuyer) {
                    leadsTbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">Lead tracking is only available for Owners and Agents.</td></tr>`;
                } else if (relevantLeads.length === 0) {
                    leadsTbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No active leads found for your properties.</td></tr>`;
                } else {
                    leadsTbody.innerHTML = relevantLeads.map(lead => `
                        <tr>
                            <td><strong>${lead.name}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">${lead.phone}</span></td>
                            <td>${lead.propertyName}</td>
                            <td><span class="status-pill status-${lead.status.toLowerCase()}">${lead.status}</span></td>
                            <td>${lead.date}</td>
                        </tr>
                    `).join('');
                }
            }

            // Render Overview Visits list
            const visitsTbody = document.getElementById('dashboard-visits-tbody');
            if (visitsTbody) {
                if (relevantVisits.length === 0) {
                    visitsTbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No scheduled site visits found.</td></tr>`;
                } else {
                    visitsTbody.innerHTML = relevantVisits.map(visit => `
                        <tr>
                            <td><strong>${visit.name}</strong></td>
                            <td>${visit.propertyAddress}</td>
                            <td>${visit.time}</td>
                            <td><span class="status-pill status-${visit.status.toLowerCase()}">${visit.status}</span></td>
                        </tr>
                    `).join('');
                }
            }
        } 
        
        else if (activeTab === 'profile') {
            const pName = document.getElementById('profile-name');
            const pEmail = document.getElementById('profile-email');
            const pPhone = document.getElementById('profile-phone');
            const pRole = document.getElementById('profile-role');

            if (pName) pName.value = user.name;
            if (pEmail) pEmail.value = user.email;
            if (pPhone) pPhone.value = user.phone;
            if (pRole) pRole.value = user.role;
        } 
        
        else if (activeTab === 'saved') {
            const savedGrid = document.getElementById('dashboard-saved-grid');
            if (savedGrid) {
                const favProperties = state.properties.filter(p => state.favorites.includes(p.id));
                if (favProperties.length === 0) {
                    savedGrid.innerHTML = `
                        <div class="empty-state" style="grid-column: 1 / -1;">
                            <h3>Your bookmarks folder is empty</h3>
                            <p>Save premium properties while browsing to access them here.</p>
                            <a href="#search" class="btn-primary" style="margin-top:16px;">Browse Properties</a>
                        </div>
                    `;
                } else {
                    savedGrid.innerHTML = favProperties.map(p => this.createCardHTML(p)).join('');
                    this.bindCardEvents(savedGrid);
                }
            }
        } 
        
        else if (activeTab === 'listings') {
            const listingsGrid = document.getElementById('dashboard-listings-grid');
            if (listingsGrid) {
                const userProperties = state.getCurrentUserProperties();
                if (userProperties.length === 0) {
                    listingsGrid.innerHTML = `
                        <div class="empty-state" style="grid-column: 1 / -1;">
                            <h3>You haven't listed any properties yet</h3>
                            <p>Post a free listing to reach thousands of potential buyers/renters instantly.</p>
                            <a href="#list-property" class="btn-primary" style="margin-top:16px;">Post Property Now</a>
                        </div>
                    `;
                } else {
                    listingsGrid.innerHTML = userProperties.map(p => this.createCardHTML(p)).join('');
                    this.bindCardEvents(listingsGrid);
                }
            }
        } 
        
        else if (activeTab === 'leads') {
            const leadsTbody = document.getElementById('panel-leads-tbody');
            if (leadsTbody) {
                const email = user.email.toLowerCase();
                const relevantLeads = state.leads.filter(l => l.agentEmail.toLowerCase() === email);
                if (relevantLeads.length === 0) {
                    leadsTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No inquiries received yet.</td></tr>`;
                } else {
                    leadsTbody.innerHTML = relevantLeads.map(lead => `
                        <tr>
                            <td><strong>${lead.name}</strong></td>
                            <td>${lead.email}</td>
                            <td>${lead.phone}</td>
                            <td>${lead.propertyName}</td>
                            <td><span class="status-pill status-${lead.status.toLowerCase()}">${lead.status}</span></td>
                            <td>
                                <button class="btn-accent" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.startDirectChat('${lead.email}', '${lead.name}')">Chat</button>
                                <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.changeLeadStatus('${lead.id}')">Toggle Status</button>
                            </td>
                        </tr>
                    `).join('');
                }
            }
        } 
        
        else if (activeTab === 'messages') {
            this.renderInbox();
        }
    },

    // Renders Message Inbox
    renderInbox() {
        const inboxList = document.getElementById('inbox-chats-list');
        const chatContainer = document.getElementById('chat-messages-container');
        if (!inboxList || !chatContainer) return;

        const chatUsers = [
            { email: "buyer@lotlite.com", name: "Vikram Malhotra (Buyer)", avatar: "VM", subtitle: "Scheduled visit for Monday" },
            { email: "rajiv@shah.com", name: "Rajiv Shah (Lead)", avatar: "RS", subtitle: "Down payment question" },
            { email: "preeti@patel.com", name: "Preeti Patel (Visitor)", avatar: "PP", subtitle: "Negotiable prices" }
        ];

        // Set active chat user if not set
        if (!state.activeChatUserId) {
            state.activeChatUserId = chatUsers[0].email;
        }

        inboxList.innerHTML = chatUsers.map(u => {
            const isActive = u.email === state.activeChatUserId ? 'active' : '';
            return `
                <div class="inbox-chat-item ${isActive}" onclick="UI.selectActiveChat('${u.email}', '${u.name}')">
                    <div class="inbox-avatar">${u.avatar}</div>
                    <div class="inbox-info">
                        <h4>${u.name}</h4>
                        <p>${u.subtitle}</p>
                    </div>
                </div>
            `;
        }).join('');

        // Render Chat bubbles for active user
        const activeUser = chatUsers.find(u => u.email === state.activeChatUserId);
        if (activeUser) {
            document.getElementById('chat-header-name').textContent = activeUser.name;
            document.getElementById('chat-header-avatar').textContent = activeUser.avatar;
            
            const history = state.chats[state.activeChatUserId] || [];
            chatContainer.innerHTML = history.map(msg => {
                const isMe = msg.sender !== activeUser.avatar;
                const bubbleClass = isMe ? 'bubble-me' : 'bubble-them';
                return `
                    <div class="chat-bubble ${bubbleClass}">
                        <div class="bubble-content">${msg.message}</div>
                        <div class="bubble-time">${msg.time}</div>
                    </div>
                `;
            }).join('');
            
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    },

    selectActiveChat(email, name) {
        state.activeChatUserId = email;
        this.renderInbox();
    },

    startDirectChat(email, name) {
        state.activeChatUserId = email;
        // Make sure a chat key exists
        if (!state.chats[email]) {
            state.chats[email] = [
                { sender: "System", message: `Chat started with ${name}.`, time: "Just Now" }
            ];
        }
        window.location.hash = '#dashboard?tab=messages';
    },

    changeLeadStatus(leadId) {
        const lead = state.leads.find(l => l.id === leadId);
        if (lead) {
            const statuses = ["New", "Contacted", "Interested", "Closed"];
            const currIdx = statuses.indexOf(lead.status);
            const nextIdx = (currIdx + 1) % statuses.length;
            lead.status = statuses[nextIdx];
            localStorage.setItem('lotlite_leads_db', JSON.stringify(state.leads));
            state.showNotification("Status Updated", `Lead ${lead.name} marked as ${lead.status}`);
            this.renderDashboard('leads');
        }
    }
};

// 4. CLIENT SIDE ROUTER
const Router = {
    routes: {
        'home': 'section-home',
        'search': 'section-search',
        'property': 'section-details',
        'list-property': 'section-list-property',
        'favorites': 'section-favorites',
        'login': 'section-login',
        'signup': 'section-signup',
        'dashboard': 'section-dashboard'
    },

    init() {
        window.addEventListener('hashchange', () => this.handleRouting());
        
        // Execute initial route
        if (!window.location.hash) {
            window.location.hash = '#home';
        } else {
            this.handleRouting();
        }
    },

    handleRouting() {
        const hashStr = window.location.hash.substring(1);
        const [routePath, queryStr] = hashStr.split('?');
        
        // Dynamic Header Sync
        UI.updateHeader();

        // 1. Handle Logout
        if (routePath === 'logout') {
            state.logout();
            window.location.hash = '#home';
            return;
        }

        // 2. Auth Guards
        if (routePath === 'dashboard' && !state.session.isLoggedIn) {
            window.location.hash = '#login';
            return;
        }
        if ((routePath === 'login' || routePath === 'signup') && state.session.isLoggedIn) {
            window.location.hash = '#dashboard';
            return;
        }

        const viewId = this.routes[routePath] || 'section-home';
        
        // Hide all views, display targeted one
        document.querySelectorAll('.view-section').forEach(view => {
            view.classList.remove('active');
        });
        
        const targetView = document.getElementById(viewId);
        if (targetView) targetView.classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);

        // Update nav links active state
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === `#${routePath}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Trigger dynamic view renders
        if (routePath === 'home') {
            UI.renderFeatured();
        } else if (routePath === 'search') {
            // Read URL search queries to pre-fill search (from Hero bar redirect)
            if (queryStr) {
                const params = new URLSearchParams(queryStr);
                if (params.has('purpose')) {
                    state.filters.purpose = params.get('purpose');
                    // Sync Buy/Rent buttons
                    const btnBuy = document.getElementById('filter-purpose-buy');
                    const btnRent = document.getElementById('filter-purpose-rent');
                    if (state.filters.purpose === 'buy') {
                        btnBuy.classList.add('active');
                        btnRent.classList.remove('active');
                    } else {
                        btnRent.classList.add('active');
                        btnBuy.classList.remove('active');
                    }
                }
                if (params.has('location')) {
                    state.filters.location = params.get('location');
                    const inputLoc = document.getElementById('filter-loc-input');
                    if (inputLoc) inputLoc.value = state.filters.location;
                }
                if (params.has('type')) {
                    state.filters.type = params.get('type');
                    // Sync type pills
                    document.querySelectorAll('.type-pill').forEach(pill => {
                        if (pill.getAttribute('data-val') === state.filters.type) {
                            pill.classList.add('active');
                        } else {
                            pill.classList.remove('active');
                        }
                    });
                }
                if (params.has('budget')) {
                    const budgetLakhs = parseInt(params.get('budget'));
                    if (!isNaN(budgetLakhs)) {
                        state.filters.price = budgetLakhs * 100000;
                        const priceSlider = document.getElementById('filter-price-slider');
                        const priceLabel = document.getElementById('price-val-label');
                        if (priceSlider) {
                            priceSlider.value = state.filters.price;
                            if (state.filters.price >= 10000000) {
                                priceLabel.textContent = `₹${(state.filters.price / 10000000).toFixed(1)} Cr`;
                            } else {
                                priceLabel.textContent = `₹${(state.filters.price / 100000).toFixed(0)} Lakh`;
                            }
                        }
                    }
                }
            }
            UI.renderListings();
        } else if (routePath === 'property') {
            const params = new URLSearchParams(queryStr);
            const id = params.get('id');
            UI.renderPropertyDetail(id);
        } else if (routePath === 'favorites') {
            UI.renderFavorites();
        } else if (routePath === 'dashboard') {
            let activeTab = 'overview';
            if (queryStr) {
                const params = new URLSearchParams(queryStr);
                if (params.has('tab')) {
                    activeTab = params.get('tab');
                }
            }
            UI.renderDashboard(activeTab);
        }
    }
};

// 5. APP INITIALIZATION & DOM EVENTS
document.addEventListener('DOMContentLoaded', () => {
    // A. Theme Switcher Event
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('lotlite_theme');
    
    // Set theme initial
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
    }
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('lotlite_theme', theme);
        });
    }

    // B. Hero view Search Bar form submission
    const heroForm = document.getElementById('hero-search-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const purpose = heroForm.querySelector('.search-tab.active').getAttribute('data-purpose');
            const location = document.getElementById('hero-search-loc').value.trim();
            const type = document.getElementById('hero-search-type').value;
            const budgetVal = document.getElementById('hero-search-budget').value;
            let budgetParam = '';
            if (budgetVal !== 'any') {
                budgetParam = `&budget=${budgetVal}`;
            }
            
            // Navigate to search with queries
            window.location.hash = `#search?purpose=${purpose}&location=${encodeURIComponent(location)}&type=${type}${budgetParam}`;
        });
        
        // Hero tabs click
        const heroTabs = heroForm.querySelectorAll('.search-tab');
        heroTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                heroTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    }

    // C. Search Page Filter Controls
    // C1. Purpose Toggle
    const btnBuy = document.getElementById('filter-purpose-buy');
    const btnRent = document.getElementById('filter-purpose-rent');
    if (btnBuy && btnRent) {
        btnBuy.addEventListener('click', () => {
            state.filters.purpose = 'buy';
            btnBuy.classList.add('active');
            btnRent.classList.remove('active');
            UI.hideMapPopover();
            UI.renderListings();
        });
        btnRent.addEventListener('click', () => {
            state.filters.purpose = 'rent';
            btnRent.classList.add('active');
            btnBuy.classList.remove('active');
            UI.hideMapPopover();
            UI.renderListings();
        });
    }

    // C2. Location Search
    const locInput = document.getElementById('filter-loc-input');
    if (locInput) {
        locInput.addEventListener('input', (e) => {
            state.filters.location = e.target.value.trim();
            UI.hideMapPopover();
            UI.renderListings();
        });
    }

    // C3. Property Type Pills
    const typePills = document.querySelectorAll('.type-pill');
    typePills.forEach(pill => {
        pill.addEventListener('click', () => {
            typePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.filters.type = pill.getAttribute('data-val');
            UI.hideMapPopover();
            UI.renderListings();
        });
    });

    // C4. BHK Pills
    const bhkPills = document.querySelectorAll('.bhk-pill');
    bhkPills.forEach(pill => {
        pill.addEventListener('click', () => {
            bhkPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.filters.bhk = pill.getAttribute('data-val');
            UI.hideMapPopover();
            UI.renderListings();
        });
    });

    // C5. Price Range Slider
    const priceSlider = document.getElementById('filter-price-slider');
    const priceLabel = document.getElementById('price-val-label');
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            state.filters.price = val;
            
            // Update UI label
            if (val >= 10000000) {
                priceLabel.textContent = `₹${(val / 10000000).toFixed(1)} Cr`;
            } else {
                priceLabel.textContent = `₹${(val / 100000).toFixed(0)} Lakh`;
            }
            
            UI.hideMapPopover();
            UI.renderListings();
        });
    }

    // C6. Furnishing Select
    const furnishingSelect = document.getElementById('filter-furnishing-select');
    if (furnishingSelect) {
        furnishingSelect.addEventListener('change', (e) => {
            state.filters.furnishing = e.target.value;
            UI.hideMapPopover();
            UI.renderListings();
        });
    }

    // C7. Construction Status Select
    const statusSelect = document.getElementById('filter-status-select');
    if (statusSelect) {
        statusSelect.addEventListener('change', (e) => {
            state.filters.status = e.target.value;
            UI.hideMapPopover();
            UI.renderListings();
        });
    }

    // C8. Sort Select
    const sortSelect = document.getElementById('filter-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sortOption = e.target.value;
            UI.renderListings();
        });
    }

    // D. Map Close Popover card click
    const mapPopClose = document.getElementById('map-popover-close-btn');
    if (mapPopClose) {
        mapPopClose.addEventListener('click', () => {
            UI.hideMapPopover();
        });
    }

    // E. Add Property Form Submissions
    const addPropertyForm = document.getElementById('add-property-form');
    if (addPropertyForm) {
        addPropertyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather values
            const title = document.getElementById('form-title').value.trim();
            const location = document.getElementById('form-location').value.trim();
            const type = document.getElementById('form-type').value;
            const purpose = document.getElementById('form-purpose').value;
            const price = parseInt(document.getElementById('form-price').value);
            const area = parseInt(document.getElementById('form-area').value);
            const bhk = document.getElementById('form-bhk').value ? parseInt(document.getElementById('form-bhk').value) : null;
            const baths = document.getElementById('form-baths').value ? parseInt(document.getElementById('form-baths').value) : null;
            const furnishing = document.getElementById('form-furnishing').value;
            const status = document.getElementById('form-status').value;
            const age = document.getElementById('form-age').value;
            const desc = document.getElementById('form-desc').value.trim();
            
            // Amenities checklist
            const amenities = [];
            document.querySelectorAll('.form-amenity-checkbox:checked').forEach(cb => {
                amenities.push(cb.value);
            });

            // Assign mock image based on type
            let image = "assets/prop_1.jpg";
            if (type === 'Villa') image = "assets/prop_2.jpg";
            if (type === 'Commercial') image = "assets/prop_3.jpg";
            
            // Random map coordinates so it appears on map
            const mapX = Math.floor(Math.random() * 40) + 30; // 30% - 70% range
            const mapY = Math.floor(Math.random() * 40) + 30;

            const formatPrice = (val) => {
                if (purpose === 'rent') {
                    return `₹${val.toLocaleString('en-IN')}/mo`;
                }
                if (val >= 10000000) {
                    return `₹${(val / 10000000).toFixed(2)} Crore`;
                }
                return `₹${(val / 100000).toFixed(1)} Lakh`;
            };

            const newProp = {
                id: `user-prop-${Date.now()}`,
                title,
                price,
                priceDisplay: formatPrice(price),
                location,
                type,
                purpose,
                bhk,
                baths,
                area,
                image,
                featured: false,
                furnishing,
                constructionStatus: status,
                age,
                amenities: amenities.length > 0 ? amenities : ["Power Backup", "24/7 Security", "Parking"],
                agent: {
                    name: "You (Self-Listed)",
                    phone: "+91 99999 88888",
                    email: "owner@lotlite.com",
                    avatar: "ME"
                },
                description: desc || "No description provided by the owner. Contact directly for full specification and visit details.",
                mapX,
                mapY
            };

            // Add & Sync
            state.addCustomProperty(newProp);
            
            // Reset form
            addPropertyForm.reset();
            
            // Redirect to search view
            window.location.hash = `#property?id=${newProp.id}`;
        });
    }

    // F. Listen to favorites update event to refresh favorites view if active
    window.addEventListener('favoritesUpdated', () => {
        if (window.location.hash.startsWith('#favorites')) {
            UI.renderFavorites();
        }
    });

    // G. Listen to Auth change event to rebuild headers and redirect if needed
    window.addEventListener('authChanged', () => {
        UI.updateHeader();
        if (window.location.hash.startsWith('#dashboard')) {
            UI.renderDashboard();
        }
    });

    // H. Login Form Submission & Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = document.getElementById('login-email');
            const passwordInput = document.getElementById('login-password');
            const rememberInput = document.getElementById('login-remember');
            
            const emailErr = document.getElementById('login-email-error');
            const passwordErr = document.getElementById('login-password-error');
            
            // Reset
            emailErr.textContent = '';
            passwordErr.textContent = '';
            
            let isValid = true;
            
            // Email validation
            const emailVal = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailVal) {
                emailErr.textContent = 'Email address is required';
                isValid = false;
            } else if (!emailRegex.test(emailVal)) {
                emailErr.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Password validation
            const passwordVal = passwordInput.value;
            if (!passwordVal) {
                passwordErr.textContent = 'Password is required';
                isValid = false;
            } else if (passwordVal.length < 6) {
                passwordErr.textContent = 'Password must be at least 6 characters';
                isValid = false;
            }
            
            if (isValid) {
                const res = state.login(emailVal, passwordVal, rememberInput.checked);
                if (res.success) {
                    window.location.hash = '#dashboard';
                    loginForm.reset();
                } else {
                    passwordErr.textContent = res.message;
                }
            }
        });
    }

    // I. Show/Hide Password Toggle
    const pwdToggle = document.getElementById('btn-login-password-toggle');
    if (pwdToggle) {
        pwdToggle.addEventListener('click', () => {
            const passwordInput = document.getElementById('login-password');
            const showIcon = pwdToggle.querySelector('.eye-icon-show');
            const hideIcon = pwdToggle.querySelector('.eye-icon-hide');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                showIcon.style.display = 'none';
                hideIcon.style.display = 'block';
            } else {
                passwordInput.type = 'password';
                showIcon.style.display = 'block';
                hideIcon.style.display = 'none';
            }
        });
    }

    // J. Signup Form Submission & Validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('signup-name');
            const emailInput = document.getElementById('signup-email');
            const phoneInput = document.getElementById('signup-phone');
            const passwordInput = document.getElementById('signup-password');
            const confirmInput = document.getElementById('signup-confirm-password');
            const roleSelect = document.getElementById('signup-role');
            
            const nameErr = document.getElementById('signup-name-error');
            const emailErr = document.getElementById('signup-email-error');
            const phoneErr = document.getElementById('signup-phone-error');
            const passwordErr = document.getElementById('signup-password-error');
            const confirmErr = document.getElementById('signup-confirm-password-error');
            
            // Reset errors
            nameErr.textContent = '';
            emailErr.textContent = '';
            phoneErr.textContent = '';
            passwordErr.textContent = '';
            confirmErr.textContent = '';
            
            let isValid = true;
            
            // Name validation
            if (!nameInput.value.trim()) {
                nameErr.textContent = 'Full name is required';
                isValid = false;
            }
            
            // Email validation
            const emailVal = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailVal) {
                emailErr.textContent = 'Email address is required';
                isValid = false;
            } else if (!emailRegex.test(emailVal)) {
                emailErr.textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Phone validation
            const phoneVal = phoneInput.value.trim();
            if (!phoneVal) {
                phoneErr.textContent = 'Phone number is required';
                isValid = false;
            } else if (phoneVal.length < 10) {
                phoneErr.textContent = 'Please enter a valid phone number';
                isValid = false;
            }
            
            // Password validation
            const passwordVal = passwordInput.value;
            if (!passwordVal) {
                passwordErr.textContent = 'Password is required';
                isValid = false;
            } else if (passwordVal.length < 6) {
                passwordErr.textContent = 'Password must be at least 6 characters';
                isValid = false;
            }
            
            // Confirm Password validation
            if (passwordVal !== confirmInput.value) {
                confirmErr.textContent = 'Passwords do not match';
                isValid = false;
            }
            
            if (isValid) {
                const res = state.signup(nameInput.value.trim(), emailVal, phoneVal, passwordVal, roleSelect.value);
                if (res.success) {
                    state.showNotification("Success!", "Account created successfully. Logging in...");
                    // Log in immediately
                    setTimeout(() => {
                        state.login(emailVal, passwordVal, false);
                        window.location.hash = '#dashboard';
                        signupForm.reset();
                    }, 1000);
                } else {
                    emailErr.textContent = res.message;
                }
            }
        });
    }

    // K. Dashboard Sidebar Navigation links bind
    document.querySelectorAll('.sidebar-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            window.location.hash = `#dashboard?tab=${tab}`;
        });
    });

    // L. Profile Edit Form Submit Handler
    const profileForm = document.getElementById('profile-edit-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pName = document.getElementById('profile-name').value.trim();
            const pPhone = document.getElementById('profile-phone').value.trim();
            
            if (pName && pPhone) {
                state.updateProfile(pName, pPhone);
            }
        });
    }

    // M. Notifications dropdown trigger
    const notifBtn = document.getElementById('btn-dashboard-notifications');
    if (notifBtn) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('dashboard-notifications-dropdown');
            if (dropdown) dropdown.classList.toggle('active');
        });
    }

    // N. Send chat message form submission
    const chatForm = document.getElementById('chat-send-form');
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!state.session.isLoggedIn || !state.activeChatUserId) return;

            const inputMsg = document.getElementById('chat-input-message');
            const message = inputMsg.value.trim();
            if (!message) return;

            // Get initials
            const myAvatar = state.session.currentUser.avatar;

            // Get date/time formatted
            const options = { hour: '2-digit', minute: '2-digit' };
            const timeStr = new Date().toLocaleTimeString('en-US', options);

            // Save to chats
            if (!state.chats[state.activeChatUserId]) {
                state.chats[state.activeChatUserId] = [];
            }

            state.chats[state.activeChatUserId].push({
                sender: myAvatar,
                message: message,
                time: timeStr
            });

            localStorage.setItem('lotlite_chats_db', JSON.stringify(state.chats));
            inputMsg.value = '';

            // Re-render chats
            UI.renderInbox();

            // Simulate quick reply
            const activeUserEmail = state.activeChatUserId;
            setTimeout(() => {
                const autoReplies = {
                    "buyer@lotlite.com": "Thank you! I will sync up with my family and get back to you by tomorrow afternoon.",
                    "rajiv@shah.com": "Perfect, thanks for confirming the down payment info. Can we schedule a visit this Sunday?",
                    "preeti@patel.com": "Alright, looking forward to meeting at the Sohna Road villa."
                };
                
                const replyText = autoReplies[activeUserEmail] || "Sounds good. Please let me know the timing details.";

                // Check if user is still in the same chat
                if (!state.chats[activeUserEmail]) state.chats[activeUserEmail] = [];
                state.chats[activeUserEmail].push({
                    sender: activeUserEmail === "buyer@lotlite.com" ? "VM" : (activeUserEmail === "rajiv@shah.com" ? "RS" : "PP"),
                    message: replyText,
                    time: new Date().toLocaleTimeString('en-US', options)
                });
                
                localStorage.setItem('lotlite_chats_db', JSON.stringify(state.chats));

                if (state.activeChatUserId === activeUserEmail && window.location.hash.includes('tab=messages')) {
                    UI.renderInbox();
                }
                
                state.showNotification("New Message Received", `From ${activeUserEmail}`);
            }, 1500);
        });
    }

    // O. Document level listener to close all dropdowns when clicking outside
    document.addEventListener('click', () => {
        const userDropdown = document.getElementById('header-user-dropdown');
        if (userDropdown) userDropdown.classList.remove('active');

        const notifDropdown = document.getElementById('dashboard-notifications-dropdown');
        if (notifDropdown) notifDropdown.classList.remove('active');
    });

    // Initialize Router
    Router.init();
});
