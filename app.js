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

// =============================================
// PROGRAMMATIC IMAGE ENRICHMENT FOR SEED DATA (Minimum 5 distinct Indian Flat/Interior images per property)
// =============================================
const INDIAN_FLAT_IMAGES = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502005229762-fc1b2381f0b5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687399-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600573472956-6f777353f86e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618219942942-ddb59a3c20a4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=800&q=80"
];

SEED_PROPERTIES.forEach((prop, index) => {
    const startIdx = (index * 5) % INDIAN_FLAT_IMAGES.length;
    const propImages = [];
    for (let i = 0; i < 5; i++) {
        propImages.push(INDIAN_FLAT_IMAGES[(startIdx + i) % INDIAN_FLAT_IMAGES.length]);
    }
    prop.images = propImages;
    prop.image = propImages[0];
});

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
            status: 'All', // 'All', 'Ready to Move', 'Under Construction'
            areaMin: 0,
            areaMax: 999999,
            amenities: []
        };
        this.sortOption = 'featured'; // 'featured', 'price-asc', 'price-desc', 'area-desc', 'newest'
        
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
        
        // Dynamic dashboard databases
        this.recentSearches = [];
        this.propertyAlerts = [];
        this.followUps = [];
        this.notifications = [];

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
            userProps.forEach((prop, index) => {
                if (!prop.images || prop.images.length === 0) {
                    const startIdx = (index * 7) % INDIAN_FLAT_IMAGES.length;
                    const propImages = [];
                    for (let i = 0; i < 5; i++) {
                        propImages.push(INDIAN_FLAT_IMAGES[(startIdx + i) % INDIAN_FLAT_IMAGES.length]);
                    }
                    prop.images = propImages;
                    prop.image = propImages[0];
                }
            });
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

        // Load recent searches or seed defaults
        const savedSearches = localStorage.getItem('lotlite_recent_searches_db');
        if (savedSearches) {
            this.recentSearches = JSON.parse(savedSearches);
        } else {
            this.seedRecentSearches();
        }

        // Load alerts or seed defaults
        const savedAlerts = localStorage.getItem('lotlite_alerts_db');
        if (savedAlerts) {
            this.propertyAlerts = JSON.parse(savedAlerts);
        } else {
            this.seedPropertyAlerts();
        }

        // Load followups or seed defaults
        const savedFollowUps = localStorage.getItem('lotlite_followups_db');
        if (savedFollowUps) {
            this.followUps = JSON.parse(savedFollowUps);
        } else {
            this.seedFollowUps();
        }

        // Load notifications or seed defaults
        const savedNotifs = localStorage.getItem('lotlite_notifications_db');
        if (savedNotifs) {
            this.notifications = JSON.parse(savedNotifs);
        } else {
            this.seedNotifications();
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

    seedRecentSearches() {
        this.recentSearches = [
            { query: "3 BHK Apartment in Hinjawadi", type: "Apartment", budget: "₹80 Lakh - ₹1.2 Cr", date: "2026-06-05" },
            { query: "2 BHK Ready Villa in Koregaon Park", type: "Villa", budget: "₹2.0 Cr - ₹3.5 Cr", date: "2026-06-04" },
            { query: "Plot near Pune Airport", type: "Plot", budget: "Under ₹1.5 Cr", date: "2026-06-02" }
        ];
        localStorage.setItem('lotlite_recent_searches_db', JSON.stringify(this.recentSearches));
    }

    seedPropertyAlerts() {
        this.propertyAlerts = [
            { id: "alert-1", query: "2 & 3 BHK in Hinjawadi", minPrice: 6000000, maxPrice: 12000000, type: "Apartment", active: true, matches: 5 },
            { id: "alert-2", query: "Villas in Koregaon Park", minPrice: 15000000, maxPrice: 40000000, type: "Villa", active: true, matches: 2 }
        ];
        localStorage.setItem('lotlite_alerts_db', JSON.stringify(this.propertyAlerts));
    }

    seedFollowUps() {
        this.followUps = [
            { id: "fu-1", leadName: "Devendra Joshi", task: "Send brochure and pricing sheet for Life Republic", dueDate: "Today", done: false, priority: "High" },
            { id: "fu-2", leadName: "Rajiv Shah", task: "Follow up regarding home loan assistance options", dueDate: "Tomorrow", done: false, priority: "Medium" },
            { id: "fu-3", leadName: "Preeti Patel", task: "Arrange meeting with owner of Sohna Road Villa", dueDate: "June 8", done: false, priority: "High" },
            { id: "fu-4", leadName: "Anjali Gupta", task: "Confirm receipt of VTP Blue Waters quotation", dueDate: "Completed", done: true, priority: "Low" }
        ];
        localStorage.setItem('lotlite_followups_db', JSON.stringify(this.followUps));
    }

    seedNotifications() {
        this.notifications = [
            { id: "notif-1", title: "New Lead Received", text: "Rajiv Shah interested in Skyline Oasis", time: "10m ago", read: false },
            { id: "notif-2", title: "Site Visit Confirmed", text: "Preeti Patel scheduled for Sohna Road Villa", time: "2h ago", read: false },
            { id: "notif-3", title: "Property View Spike", text: "Your listings got 150 views today", time: "5h ago", read: true }
        ];
        localStorage.setItem('lotlite_notifications_db', JSON.stringify(this.notifications));
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

            // Area Range Match (NEW)
            if (this.filters.areaMin > 0 && prop.area < this.filters.areaMin) return false;
            if (this.filters.areaMax < 999999 && prop.area > this.filters.areaMax) return false;

            // Amenities Match (NEW)
            if (this.filters.amenities && this.filters.amenities.length > 0) {
                const hasAll = this.filters.amenities.every(a =>
                    prop.amenities && prop.amenities.some(pa => pa.toLowerCase().includes(a.toLowerCase()))
                );
                if (!hasAll) return false;
            }

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
            } else if (this.sortOption === 'newest') {
                return (b.id > a.id) ? 1 : -1;
            }
            return 0;
        });
    }

    showNotification(title, message) {
        const notif = document.getElementById('notification-toast');
        if (!notif) return;
        
        // Debounce: clear any pending hide timer to prevent overlap
        if (this._notifTimer) {
            clearTimeout(this._notifTimer);
            this._notifTimer = null;
        }
        
        notif.querySelector('h4').textContent = title;
        notif.querySelector('p').textContent = message;
        notif.classList.add('active');
        
        this._notifTimer = setTimeout(() => {
            notif.classList.remove('active');
            this._notifTimer = null;
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
        
        if (state.viewMode === 'list') {
            const statusClass = prop.constructionStatus === 'Ready to Move' ? 'status-ready' : 'status-uc';
            const statusLabel = prop.constructionStatus === 'Ready to Move' ? 'Ready to Move' : 'Under Const.';
            return `
                <div class="property-card-list" data-id="${prop.id}">
                    <div class="list-card-img-wrapper" onclick="UI.navigateToProperty('${prop.id}')" style="cursor: pointer;">
                        <img src="${prop.image}" alt="${prop.title}" class="list-card-img">
                        <button class="card-favorite-btn ${isFav}" data-id="${prop.id}" aria-label="Add to favorites" style="position: absolute; top: 12px; right: 12px; z-index: 5;">
                            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        </button>
                    </div>
                    <div class="list-card-body">
                        <div>
                            <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 4px;">${prop.type} • ${prop.furnishing}</div>
                            <h3 class="list-card-title" onclick="UI.navigateToProperty('${prop.id}')" style="cursor: pointer;">${prop.title}</h3>
                            <div class="list-card-location">
                                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                <span>${prop.location}</span>
                            </div>
                        </div>
                        <div class="list-card-specs">
                            <div class="list-card-spec">
                                <svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                                <span>${specBHK}</span>
                            </div>
                            <div class="list-card-spec">
                                <svg viewBox="0 0 24 24"><path d="M20 13V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v9H2v7h20v-7h-2zM4 18v-3h6v3H4zm16 0h-8v-3h8v3z"/></svg>
                                <span>${specBaths}</span>
                            </div>
                            <div class="list-card-spec">
                                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                                <span>${prop.area} Sq.Ft.</span>
                            </div>
                        </div>
                        <p class="list-card-desc" style="margin: 0; font-size: 0.81rem; color: var(--text-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${prop.description}</p>
                    </div>
                    <div class="list-card-action">
                        <div style="text-align: right; width: 100%;">
                            <div class="list-card-badge ${statusClass}" style="display: inline-block; margin-bottom: 8px;">${statusLabel}</div>
                            <div class="list-card-price" style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: var(--primary);">${prop.priceDisplay}</div>
                            <div class="list-card-price-meta">Est. ₹${Math.round(prop.price / prop.area).toLocaleString('en-IN')}/sqft</div>
                        </div>
                        <button class="list-card-view-btn" onclick="UI.navigateToProperty('${prop.id}')" style="width: 100%; font-weight: 600; padding: 8px 14px;">View Details</button>
                    </div>
                </div>
            `;
        }

        // Default Grid Card
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
        // 1. Standalone Search results page
        const resultsGrid = document.getElementById('listings-results-grid');
        const resultsCountEl = document.getElementById('results-count');
        const mapContainer = document.getElementById('map-pins-overlay');
        
        if (resultsGrid) {
            if (state.viewMode === 'list') {
                resultsGrid.className = 'listings-layout-list';
            } else {
                resultsGrid.className = 'listings-layout-grid';
            }

            const filtered = state.getFilteredProperties();
            if (resultsCountEl) resultsCountEl.textContent = `${filtered.length} Properties found`;

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
            } else {
                resultsGrid.innerHTML = filtered.map(p => this.createCardHTML(p)).join('');
                this.bindCardEvents(resultsGrid);
                if (mapContainer) {
                    this.renderMapPins(filtered, mapContainer);
                }
            }
        }

        // 2. Dashboard Listings Grid (My Listings / Inventory)
        const listingsGrid = document.getElementById('dashboard-listings-grid');
        if (listingsGrid) {
            const userProperties = state.getCurrentUserProperties();
            if (userProperties.length === 0) {
                listingsGrid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1; text-align:center; padding:40px;">
                        <h3>You haven't listed any properties yet</h3>
                        <p>Post a free listing to reach thousands of potential buyers/renters instantly.</p>
                        <a href="#list-property" class="btn-primary" style="margin-top:16px; display:inline-block;">Post Property Now</a>
                    </div>
                `;
            } else {
                listingsGrid.innerHTML = userProperties.map(p => this.createCardHTML(p)).join('');
                this.bindCardEvents(listingsGrid);
            }
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
        const favProperties = state.properties.filter(p => state.favorites.includes(p.id));

        // 1. Standalone Favorites Page
        const favsGrid = document.getElementById('favorites-results-grid');
        if (favsGrid) {
            if (favProperties.length === 0) {
                favsGrid.innerHTML = `
                    <div class="empty-state">
                        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <h3>Your favorites list is empty</h3>
                        <p>Bookmark premium properties while browsing to access them later instantly.</p>
                        <a href="#search" class="btn-primary">Browse Properties</a>
                    </div>
                `;
            } else {
                favsGrid.innerHTML = favProperties.map(p => this.createCardHTML(p)).join('');
                this.bindCardEvents(favsGrid);
            }
        }

        // 2. Dashboard Favorites Folder
        const savedGrid = document.getElementById('dashboard-saved-grid');
        if (savedGrid) {
            if (favProperties.length === 0) {
                savedGrid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1; text-align:center; padding:40px;">
                        <h3>Your bookmarks folder is empty</h3>
                        <p>Save premium properties while browsing to access them here.</p>
                        <a href="#search" class="btn-primary" style="margin-top:16px; display:inline-block;">Browse Properties</a>
                    </div>
                `;
            } else {
                savedGrid.innerHTML = favProperties.map(p => this.createCardHTML(p)).join('');
                this.bindCardEvents(savedGrid);
            }
        }
    },

    // =============================================
    // MODULE 1 — PROPERTY DETAIL PRO PAGE
    // =============================================

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
        const specBHK = prop.bhk ? `${prop.bhk} BHK` : 'Plot / Land Space';
        const RERA_num = `RERA-MH-2026-${Math.abs(prop.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0))}`;

        // Dynamic multi-image gallery setup
        const galleryImages = prop.images && prop.images.length > 0 ? prop.images : [
            prop.image,
            "assets/prop_1.jpg",
            "assets/prop_2.jpg",
            "assets/prop_3.jpg"
        ].filter((img, idx, self) => self.indexOf(img) === idx);
        while (galleryImages.length < 3) {
            galleryImages.push("assets/prop_1.jpg");
        }

        // Dynamically compute connectivity landmarks based on location
        const city = prop.location.split(',').pop().trim();
        let nearbyPlaces = [];
        if (city === 'Pune') {
            nearbyPlaces = [
                { name: "Hinjawadi IT Park", dist: "2.5 km", type: "IT Hub" },
                { name: "Amanora Mall", dist: "4.1 km", type: "Shopping" },
                { name: "DPS Public School", dist: "1.8 km", type: "Education" },
                { name: "Jehangir Hospital", dist: "3.2 km", type: "Healthcare" }
            ];
        } else if (city === 'Noida') {
            nearbyPlaces = [
                { name: "Sector 18 Metro", dist: "1.2 km", type: "Transit" },
                { name: "DLF Mall of India", dist: "2.0 km", type: "Shopping" },
                { name: "Amity University", dist: "3.5 km", type: "Education" },
                { name: "Fortis Hospital", dist: "2.8 km", type: "Healthcare" }
            ];
        } else if (city === 'Gurgaon' || city === 'Gurugram') {
            nearbyPlaces = [
                { name: "Cyber City Hub", dist: "1.5 km", type: "IT Park" },
                { name: "Ambience Mall", dist: "2.3 km", type: "Shopping" },
                { name: "Medanta Medicity", dist: "4.0 km", type: "Healthcare" },
                { name: "GD Goenka School", dist: "3.1 km", type: "Education" }
            ];
        } else {
            nearbyPlaces = [
                { name: `${city} Central Plaza`, dist: "1.4 km", type: "Shopping" },
                { name: "City Public School", dist: "2.0 km", type: "Education" },
                { name: "City General Hospital", dist: "3.2 km", type: "Healthcare" },
                { name: "Metro Link Station", dist: "0.8 km", type: "Transit" }
            ];
        }

        // Agent profile and stats computation
        const agentName = prop.agent ? prop.agent.name : "Lotlite Representative";
        const agentAvatar = prop.agent ? prop.agent.avatar : "LR";
        const agentPhone = prop.agent ? prop.agent.phone : "+91 99999 88888";
        const agentEmail = prop.agent ? prop.agent.email : "info@lotlite.com";
        const reraHash = agentName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const agentExp = (reraHash % 10) + 3;
        const agentListings = (reraHash % 15) + 5;

        // Compute similar properties
        const similarProps = state.properties.filter(p => p.id !== prop.id && p.type === prop.type && p.price >= prop.price * 0.6 && p.price <= prop.price * 1.4).slice(0, 4);
        let similarHTML = '';
        if (similarProps.length === 0) {
            similarHTML = '<p class="text-muted" style="padding: 10px 0; grid-column: 1 / -1;">No similar properties in this budget range.</p>';
        } else {
            similarHTML = similarProps.map(p => `
                <div class="similar-prop-card" onclick="UI.navigateToProperty('${p.id}')" style="flex: 0 0 240px; border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; background: var(--bg-secondary); cursor: pointer; transition: all var(--transition-fast);">
                    <div style="height: 140px; overflow: hidden; position: relative;">
                        <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.6); color: white; font-size: 0.65rem; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${p.type}</div>
                    </div>
                    <div style="padding: 12px;">
                        <h4 style="font-size: 0.88rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 4px;">${p.title}</h4>
                        <p style="font-size: 0.72rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 8px;">${p.location}</p>
                        <div style="font-family: var(--font-heading); font-weight: 800; color: var(--primary); font-size: 0.95rem;">${p.priceDisplay}</div>
                    </div>
                </div>
            `).join('');
        }

        detailContainer.innerHTML = `
            <div class="detail-page-wrapper" style="max-width: 1200px; margin: 0 auto; padding: 20px 4% 80px;">
                <div class="detail-back-nav" onclick="window.history.back()" style="display: inline-flex; align-items: center; gap: 6px; cursor: pointer; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); transition: color var(--transition-fast); margin-bottom: 24px;">
                    <svg viewBox="0 0 24 24" style="width:16px; height:16px; fill:currentColor;"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    <span>Back to listings</span>
                </div>

                <div class="details-header-row" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap; margin-bottom: 24px;">
                    <div class="detail-title-block">
                        <h1 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; font-family: var(--font-heading);">${prop.title}</h1>
                        <div class="details-address-block" style="display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--text-secondary);">
                            <svg viewBox="0 0 24 24" style="width: 15px; height: 15px; fill: var(--primary); flex-shrink:0;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            <span>${prop.location}</span>
                        </div>
                    </div>
                    <div class="details-price-block" style="text-align: right; min-width: 150px;">
                        <span class="detail-price-main" style="font-size: 1.8rem; font-weight: 800; color: var(--primary); display: block; font-family: var(--font-heading);">${prop.priceDisplay}</span>
                        <span style="font-size: 0.78rem; color: var(--text-muted);">₹${Math.round(prop.price / prop.area).toLocaleString('en-IN')}/sq.ft. • Carpet Area</span>
                    </div>
                </div>

                <!-- Hero Gallery -->
                <div class="detail-hero-gallery" style="position: relative; margin-bottom: 24px; border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-tertiary); box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
                    <div class="gallery-main-wrapper" id="gallery-main-wrapper" style="position: relative; height: 420px; display: flex; align-items: center; justify-content: center; overflow: hidden; cursor: zoom-in;">
                        <img id="gallery-main-img" src="${galleryImages[0]}" alt="${prop.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                        <button class="gallery-nav-btn prev" id="gallery-prev" aria-label="Previous Image" style="position: absolute; left: 16px; width: 44px; height: 44px; border-radius: 50%; border: none; background: rgba(255,255,255,0.9); color: var(--text-primary); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all var(--transition-fast); z-index: 10;">&#8249;</button>
                        <button class="gallery-nav-btn next" id="gallery-next" aria-label="Next Image" style="position: absolute; right: 16px; width: 44px; height: 44px; border-radius: 50%; border: none; background: rgba(255,255,255,0.9); color: var(--text-primary); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all var(--transition-fast); z-index: 10;">&#8250;</button>
                        <span class="gallery-counter" id="gallery-counter" style="position: absolute; bottom: 16px; right: 16px; background: rgba(0,0,0,0.7); color: white; padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.78rem; font-weight: 600; font-family: var(--font-heading); z-index: 10;">1 / ${galleryImages.length}</span>
                    </div>
                    <div class="gallery-thumbnails" style="display: flex; gap: 8px; padding: 12px; background: var(--bg-secondary); border-top: 1px solid var(--border-color); overflow-x: auto;">
                        ${galleryImages.map((img, i) => `
                            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" style="width: 80px; height: 56px; border-radius: var(--radius-sm); overflow: hidden; cursor: pointer; border: 2px solid transparent; transition: all var(--transition-fast); flex-shrink: 0;">
                                <img src="${img}" alt="Thumbnail ${i+1}" style="width:100%; height:100%; object-fit:cover;">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="detail-content-layout" style="display: grid; grid-template-columns: 1fr 340px; gap: 28px; align-items: start;">
                    <!-- LEFT COLUMN — Specs, Highlights, Amenities, Floor Plan, Location -->
                    <div class="detail-content-col" style="display: flex; flex-direction: column; gap: 24px;">
                        
                        <!-- A. Property Specs Grid -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                Property Specifications
                            </h2>
                            <div class="spec-badge-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;">
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Configuration</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${specBHK}</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Super Area</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${prop.area} sq.ft.</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Carpet Area</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${Math.round(prop.area * 0.88)} sq.ft.</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Built-up Area</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${Math.round(prop.area * 1.12)} sq.ft.</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Possession</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${prop.constructionStatus === 'Ready to Move' ? 'Immediate' : 'In 6 Months'}</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Age of Property</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${prop.age || 'New Launch'}</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Furnishing</span>
                                    <span class="spec-value" style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary);">${prop.furnishing || 'Unfurnished'}</span>
                                </div>
                                <div class="spec-badge" style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                                    <span class="spec-label" style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">RERA Reg No.</span>
                                    <span class="spec-value" style="font-size: 0.75rem; font-weight: 700; color: var(--success); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${RERA_num}</span>
                                </div>
                            </div>
                        </div>

                        <!-- B. About / Description Card -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                About This Property
                            </h2>
                            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65; white-space: pre-line;">${prop.description}</p>
                        </div>

                        <!-- C. Key Highlights Card -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 5h2v2h-2zm0 4h2v2h-2z"/></svg>
                                Key Highlights
                            </h2>
                            <div class="highlights-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
                                <div class="highlight-card" style="display: flex; gap: 12px; padding: 14px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-tertiary);">
                                    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: var(--primary); flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    <div>
                                        <h4 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 2px;">Vastu Compliant</h4>
                                        <p style="font-size: 0.75rem; color: var(--text-secondary);">East facing front entrance portal</p>
                                    </div>
                                </div>
                                <div class="highlight-card" style="display: flex; gap: 12px; padding: 14px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-tertiary);">
                                    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: var(--primary); flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    <div>
                                        <h4>Prime Location</h4>
                                        <p style="font-size: 0.75rem; color: var(--text-secondary);">Located in high-demand residential core</p>
                                    </div>
                                </div>
                                <div class="highlight-card" style="display: flex; gap: 12px; padding: 14px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-tertiary);">
                                    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: var(--primary); flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    <div>
                                        <h4>Smart Design</h4>
                                        <p style="font-size: 0.75rem; color: var(--text-secondary);">Excellent natural cross ventilation & light</p>
                                    </div>
                                </div>
                                <div class="highlight-card" style="display: flex; gap: 12px; padding: 14px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-tertiary);">
                                    <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: var(--primary); flex-shrink: 0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                    <div>
                                        <h4>Safety Assured</h4>
                                        <p style="font-size: 0.75rem; color: var(--text-secondary);">Full 3-tier security & CCTV monitoring</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- D. Amenities Card -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                Premium Amenities & Perks
                            </h2>
                            <div class="amenity-icon-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
                                ${prop.amenities.map(a => `
                                    <div class="amenity-icon-card" style="display: flex; align-items: center; gap: 8px; padding: 12px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.82rem; font-weight: 500;">
                                        <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: var(--primary); flex-shrink: 0;"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                        <span>${a}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- E. Interactive Floor Plan Layout -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                                Floor Plan Layout
                            </h2>
                            <div class="floor-plan-box" id="floor-plan-box" style="cursor: zoom-in; border: 1px dashed var(--border-color); border-radius: var(--radius-md); overflow: hidden; display: flex; justify-content: center; align-items: center; background: var(--bg-tertiary);">
                                ${this._generateFloorPlanSVG(prop.bhk || 2)}
                            </div>
                            <p style="font-size:0.75rem; color:var(--text-muted); margin-top:8px; text-align:center;">Click layout schematic to open zooming viewer</p>
                        </div>

                        <!-- F. Map & Connectivity Section -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>
                                Location & Nearby Connectivity
                            </h2>
                            <div style="height: 200px; background: linear-gradient(135deg, var(--primary-light), var(--bg-secondary)); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 0.88rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 18px; border:1px solid var(--border-color); position:relative; overflow:hidden;">
                                <div style="position:absolute; inset:0; opacity:0.1; background-image: radial-gradient(var(--text-muted) 1px, transparent 0), radial-gradient(var(--text-muted) 1px, transparent 0); background-size: 8px 8px; background-position: 0 0, 4px 4px;"></div>
                                <div style="z-index:1; display:flex; flex-direction:column; align-items:center; gap:8px;">
                                    <div style="width: 40px; height: 40px; border-radius:50%; background:var(--primary); color:white; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 10px rgba(var(--primary-rgb),0.3);">
                                        <svg viewBox="0 0 24 24" style="width:20px; height:20px; fill:currentColor;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                    </div>
                                    <span>Built-in Interactive Micro-Map</span>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <h4 style="font-size:0.85rem; font-weight:700; margin-bottom:4px; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.5px;">Landmarks & Distance:</h4>
                                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px;">
                                    ${nearbyPlaces.map(n => `
                                        <div class="nearby-place-chip" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.8rem; transition: transform var(--transition-fast);" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform='none'">
                                            <div style="display:flex; flex-direction:column; gap:2px;">
                                                <span style="font-weight: 700; color:var(--text-primary);">${n.name}</span>
                                                <span style="font-size: 0.68rem; color: var(--text-muted); font-weight:600;">${n.type}</span>
                                            </div>
                                            <span style="font-weight: 700; color: var(--primary); background: var(--primary-light); padding: 2px 8px; border-radius: 4px; font-size:0.75rem;">${n.dist}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- G. Seller / Builder Agent Card -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                Builder & Agent Desk
                            </h2>
                            <div class="agent-profile-card" style="display: flex; gap: 20px; align-items: center; padding: 18px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); flex-wrap: wrap;">
                                <div style="width: 58px; height: 58px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: 700; flex-shrink: 0; box-shadow: 0 4px 10px rgba(var(--primary-rgb),0.2);">${agentAvatar}</div>
                                <div style="flex: 1; min-width: 220px;">
                                    <h3 style="font-size: 1.1rem; font-weight: 700; margin: 0 0 2px 0; display:flex; align-items:center; gap:8px;">
                                        ${agentName}
                                        <span style="background:var(--success); color:white; font-size:0.65rem; padding:2px 8px; border-radius:var(--radius-full); font-weight:600; letter-spacing:0.5px;">VERIFIED SELLER</span>
                                    </h3>
                                    <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 12px; font-weight:500;">Prime LotLite Real Estate Executive</p>
                                    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                                        <div class="agent-stat" style="display:flex; flex-direction:column;"><strong style="font-size: 0.95rem; font-weight:800; color:var(--text-primary);">${agentExp}+ Yrs</strong><span style="font-size: 0.68rem; color:var(--text-muted);">Experience</span></div>
                                        <div class="agent-stat" style="display:flex; flex-direction:column;"><strong style="font-size: 0.95rem; font-weight:800; color:var(--text-primary);">${agentListings}</strong><span style="font-size: 0.68rem; color:var(--text-muted);">Active Listings</span></div>
                                        <div class="agent-stat" style="display:flex; flex-direction:column;"><strong style="font-size: 0.95rem; font-weight:800; color:var(--text-primary);">4.${(reraHash % 5) + 5}★</strong><span style="font-size: 0.68rem; color:var(--text-muted);">User Rating</span></div>
                                    </div>
                                </div>
                                <div class="agent-contact-btns" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; width: 100%; margin-top: 12px;">
                                    <button class="btn-agent-call" style="padding: 10px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 600; font-size:0.8rem; color:var(--text-primary); transition: all var(--transition-fast);" onclick="state.showNotification('Calling Agent', 'Connecting you to ${agentName.replace(/'/g, "\\'")}...')">
                                        <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:currentColor;"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                                        Call
                                    </button>
                                    <button class="btn-agent-wa" style="padding: 10px; background: #25D366; border: none; border-radius: var(--radius-sm); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; font-size:0.8rem; color:white; transition: all var(--transition-fast);" onclick="state.showNotification('WhatsApp', 'Opening WhatsApp chat for ${agentName.replace(/'/g, "\\'")}...')">
                                        <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:currentColor;"><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.22.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.42-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/></svg>
                                        Chat
                                    </button>
                                    <button class="btn-agent-inquiry" style="padding: 10px; background: var(--primary); border: none; border-radius: var(--radius-sm); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; font-size:0.8rem; color:white; transition: all var(--transition-fast);" onclick="state.showNotification('Inquiry Sent', 'Inquiry for ${prop.title} has been logged for ${agentName.replace(/'/g, "\\'")}!')">
                                        <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:currentColor;"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                        Inquire
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- H. Similar Properties Section -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>
                                Similar Properties You May Like
                            </h2>
                            <div class="similar-props-scroll" style="display: flex; gap: 16px; overflow-x: auto; padding-bottom: 8px;">
                                ${similarHTML}
                            </div>
                        </div>

                        <!-- I. Advanced EMI Calculator Card (MODULE 2B) -->
                        <div class="detail-section-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">
                            <h2 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; font-family: var(--font-heading);">
                                <svg viewBox="0 0 24 24" style="width: 18px; height: 18px; fill: var(--primary);"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>
                                Interactive EMI & Loan Desk
                            </h2>
                            <div class="emi-calculator-card" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; padding: 18px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); flex-wrap: wrap;">
                                <div class="emi-inputs" style="display: flex; flex-direction: column; gap: 14px;">
                                    <div class="emi-input-group" style="display: flex; flex-direction: column; gap: 6px;">
                                        <label style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); display: flex; justify-content: space-between;">Down Payment: <span id="val-emi-down" style="color:var(--primary); font-weight:700;">₹0</span></label>
                                        <input type="range" class="range-slider" id="input-emi-down" min="0" max="${Math.round(prop.price * 0.95)}" step="50000" value="${Math.round(prop.price * 0.2)}" style="width: 100%; accent-color: var(--primary);">
                                    </div>
                                    <div class="emi-input-group" style="display: flex; flex-direction: column; gap: 6px;">
                                        <label style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); display: flex; justify-content: space-between;">Loan Interest Rate: <span id="val-emi-interest" style="color:var(--primary); font-weight:700;">8.5%</span></label>
                                        <input type="range" class="range-slider" id="input-emi-interest" min="5.0" max="15.0" step="0.1" value="8.5" style="width: 100%; accent-color: var(--primary);">
                                    </div>
                                    <div class="emi-input-group" style="display: flex; flex-direction: column; gap: 6px;">
                                        <label style="font-size: 0.82rem; font-weight: 600; color: var(--text-secondary); display: flex; justify-content: space-between;">Tenure Period: <span id="val-emi-tenure" style="color:var(--primary); font-weight:700;">20 Years</span></label>
                                        <input type="range" class="range-slider" id="input-emi-tenure" min="5" max="30" step="1" value="20" style="width: 100%; accent-color: var(--primary);">
                                    </div>
                                </div>
                                <div class="emi-results" style="padding: 16px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                                    <h4 style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 6px; letter-spacing:0.5px;">Monthly Installment</h4>
                                    <div class="emi-monthly-val" id="emi-monthly-output" style="font-size: 1.6rem; font-weight: 800; color: var(--primary); font-family: var(--font-heading); margin-bottom: 12px;">₹0</div>
                                    <div class="emi-detail-breakdown" style="display: flex; flex-direction: column; gap: 6px; width: 100%; font-size: 0.72rem; border-top: 1px solid var(--border-color); padding-top: 12px; text-align: left;">
                                        <div style="display:flex; justify-content:space-between;"><span>Principal Loan:</span><strong id="emi-principal-val">₹0</strong></div>
                                        <div style="display:flex; justify-content:space-between;"><span>Total Interest:</span><strong id="emi-total-interest" style="color:var(--warning);">₹0</strong></div>
                                        <div style="display:flex; justify-content:space-between; font-weight:700; border-top:1px dashed var(--border-color); padding-top:4px; margin-top:2px;"><span>Total Payable:</span><strong id="emi-total-payable">₹0</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- RIGHT COLUMN — Sticky Contact Card (Desktop Sidebar) -->
                    <div class="detail-sticky-col" style="position: sticky; top: calc(var(--header-height) + 24px);">
                        <div class="sticky-contact-card" style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
                            <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; font-family: var(--font-heading);">Schedule Private Consultation</h3>
                            <div class="sticky-price-display" style="font-size: 1.55rem; font-weight: 800; color: var(--primary); margin: 6px 0; font-family: var(--font-heading);">${prop.priceDisplay}</div>
                            <div class="sticky-price-sqft" style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 20px;">₹${Math.round(prop.price / prop.area).toLocaleString('en-IN')}/sq.ft. • Super Area ${prop.area} sqft</div>
                            <div class="sticky-contact-btns" style="display: flex; flex-direction: column; gap: 10px;">
                                <button class="btn-contact-primary" style="width: 100%; padding: 12px; background: var(--primary); color: white; border: none; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.88rem; transition: background var(--transition-fast);" onclick="state.showNotification('Agent Contacted', '${agentName.replace(/'/g, "\\'")} will contact you shortly.')">
                                    <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: currentColor;"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                                    Contact Agent
                                </button>
                                <button class="btn-contact-secondary" style="width: 100%; padding: 12px; background: transparent; border: 1px solid var(--primary); color: var(--primary); border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.88rem; transition: all var(--transition-fast);" onclick="state.showNotification('Visit Scheduled', 'Site visit request registered! Confirmation will be sent via SMS.')">
                                    <svg viewBox="0 0 24 24" style="width: 16px; height: 16px; fill: currentColor;"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/></svg>
                                    Schedule Site Visit
                                </button>
                            </div>
                            <p class="sticky-disclaimer" style="font-size: 0.72rem; color: var(--text-muted); margin-top: 14px; text-align: center; line-height: 1.45;">By clicking, you consent to receive callback from agent on registered mobile number.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile CTA Bar (Fixed to bottom for responsive screens) -->
            <div class="detail-mobile-cta" id="detail-mobile-cta" style="position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg-secondary); border-top: 1px solid var(--border-color); padding: 12px 20px; display: none; gap: 10px; z-index: 200; box-shadow: 0 -6px 20px rgba(0,0,0,0.08);">
                <button class="btn-contact-secondary" style="flex: 1; padding: 12px; background: transparent; border: 1px solid var(--primary); color: var(--primary); border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.82rem;" onclick="state.showNotification('Visit Scheduled', 'Site visit request registered! Confirmation will be sent via SMS.')">
                    <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/></svg>
                    Schedule Visit
                </button>
                <button class="btn-contact-primary" style="flex: 1; padding: 12px; background: var(--primary); color: white; border: none; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.82rem;" onclick="state.showNotification('Agent Contacted', '${agentName.replace(/'/g, "\\'")} will contact you shortly.')">
                    <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                    Contact Agent
                </button>
            </div>
        `;

        // Initialize active gallery control and EMI calculator sliders
        this.initDetailGallery(galleryImages);
        this.initEMICalculator(prop.price);

        // Floor plan image expand lightbox trigger
        const floorPlanBox = document.getElementById('floor-plan-box');
        if (floorPlanBox) {
            floorPlanBox.addEventListener('click', () => {
                const lb = document.getElementById('detail-lightbox');
                const lbImg = document.getElementById('lightbox-img');
                if (lb && lbImg) {
                    lbImg.src = galleryImages[0];
                    lb.classList.add('open');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    },

    // Dynamic schematic SVG floor plan builder based on BHK configuration
    _generateFloorPlanSVG(bhk) {
        const rooms = [];
        if (bhk >= 1) rooms.push({ x: 15, y: 15, w: 110, h: 85, label: "Master Bed" });
        if (bhk >= 2) rooms.push({ x: 135, y: 15, w: 100, h: 85, label: "Bedroom 2" });
        if (bhk >= 3) rooms.push({ x: 245, y: 15, w: 100, h: 85, label: "Bedroom 3" });
        if (bhk >= 4) rooms.push({ x: 245, y: 110, w: 100, h: 80, label: "Guest Suite" });
        rooms.push({ x: 15, y: 110, w: 170, h: 105, label: "Living / Lounge" });
        rooms.push({ x: 195, y: 110, w: 40, h: 60, label: "Kitchen" });
        rooms.push({ x: 195, y: 175, w: 40, h: 40, label: "Bath 1" });
        rooms.push({ x: 245, y: 195, w: 100, h: 20, label: "Balcony" });

        const svgRooms = rooms.map(r => `
            <rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="var(--primary-light)" stroke="var(--border-color)" stroke-width="1.5" rx="3"/>
            <text x="${r.x + r.w/2}" y="${r.y + r.h/2}" text-anchor="middle" dominant-baseline="middle" font-size="8" fill="var(--text-secondary)" font-family="Inter, sans-serif" font-weight="600">${r.label}</text>
        `).join('');

        return `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-height:260px; padding:16px; box-sizing:border-box;">
            <rect width="360" height="240" fill="var(--bg-tertiary)" rx="8"/>
            ${svgRooms}
            <text x="180" y="232" text-anchor="middle" font-size="8.5" fill="var(--text-muted)" font-family="Inter, sans-serif" font-weight="700">${bhk} BHK Floor Layout Plan (Click to expand)</text>
        </svg>`;
    },

    // Multi-Image Gallery Carousel Controllers (Mobile Swipe, Buttons and Lightbox)
    initDetailGallery(images) {
        let current = 0;
        const mainImg = document.getElementById('gallery-main-img');
        const counter = document.getElementById('gallery-counter');
        const thumbs = document.querySelectorAll('.gallery-thumb');
        const lightbox = document.getElementById('detail-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.getElementById('lightbox-close-btn');
        const lightboxPrev = document.getElementById('lightbox-prev-btn');
        const lightboxNext = document.getElementById('lightbox-next-btn');

        const setImage = (idx) => {
            current = (idx + images.length) % images.length;
            if (mainImg) mainImg.src = images[current];
            if (counter) counter.textContent = `${current + 1} / ${images.length}`;
            thumbs.forEach((t, i) => {
                if (i === current) {
                    t.style.borderColor = 'var(--primary)';
                    t.style.opacity = '1';
                } else {
                    t.style.borderColor = 'transparent';
                    t.style.opacity = '0.6';
                }
            });
            if (lightboxImg && lightbox?.classList.contains('open')) {
                lightboxImg.src = images[current];
            }
        };

        // Click actions
        document.getElementById('gallery-prev')?.addEventListener('click', (e) => { e.stopPropagation(); setImage(current - 1); });
        document.getElementById('gallery-next')?.addEventListener('click', (e) => { e.stopPropagation(); setImage(current + 1); });
        thumbs.forEach(t => t.addEventListener('click', () => setImage(parseInt(t.getAttribute('data-index')))));

        // Lightbox Expansion triggers
        document.getElementById('gallery-main-wrapper')?.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            if (lightbox && lightboxImg) {
                lightboxImg.src = images[current];
                lightbox.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });

        const closeLightbox = () => {
            lightbox?.classList.remove('open');
            document.body.style.overflow = '';
        };

        lightboxClose?.addEventListener('click', closeLightbox);
        lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
        lightboxPrev?.addEventListener('click', () => setImage(current - 1));
        lightboxNext?.addEventListener('click', () => setImage(current + 1));

        // Swipe Gesture support
        let startX = 0;
        const mainWrap = document.getElementById('gallery-main-wrapper');
        mainWrap?.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
        mainWrap?.addEventListener('touchend', (e) => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                setImage(diff > 0 ? current + 1 : current - 1);
            }
        }, { passive: true });

        // Key listeners for accessible lightbox navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox?.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') setImage(current - 1);
            if (e.key === 'ArrowRight') setImage(current + 1);
        });
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
            status: 'All',
            areaMin: 0,
            areaMax: 999999,
            amenities: []
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

        // Reset new filters (Area + Amenities)
        const areaMinInput = document.getElementById('filter-area-min');
        const areaMaxInput = document.getElementById('filter-area-max');
        if (areaMinInput) areaMinInput.value = '';
        if (areaMaxInput) areaMaxInput.value = '';

        document.querySelectorAll('.amenity-filter-cb').forEach(cb => {
            cb.checked = false;
        });

        // Mirror to drawer if open
        const drawerAreaMin = document.querySelector('#mobile-filter-drawer #filter-area-min');
        const drawerAreaMax = document.querySelector('#mobile-filter-drawer #filter-area-max');
        if (drawerAreaMin) drawerAreaMin.value = '';
        if (drawerAreaMax) drawerAreaMax.value = '';
        document.querySelectorAll('#mobile-filter-drawer .amenity-filter-cb').forEach(cb => {
            cb.checked = false;
        });

        // Re-render
        this.hideMapPopover();
        this.renderFilterChips();
        this.renderListings();
    },

    // Render interactive filter chips based on currently applied criteria
    renderFilterChips() {
        const chipsContainer = document.getElementById('filter-chips-row');
        if (!chipsContainer) return;

        const chips = [];

        // Purpose
        if (state.filters.purpose && state.filters.purpose !== 'buy') {
            chips.push({ label: `Purpose: ${state.filters.purpose.toUpperCase()}`, key: 'purpose', val: 'buy' });
        }
        // Location
        if (state.filters.location) {
            chips.push({ label: `Loc: ${state.filters.location}`, key: 'location', val: '' });
        }
        // Type
        if (state.filters.type && state.filters.type !== 'All') {
            chips.push({ label: `Type: ${state.filters.type}`, key: 'type', val: 'All' });
        }
        // BHK
        if (state.filters.bhk && state.filters.bhk !== 'All') {
            chips.push({ label: `${state.filters.bhk} BHK`, key: 'bhk', val: 'All' });
        }
        // Price Max (if below 6 Cr)
        if (state.filters.price && state.filters.price < 60000000) {
            const formattedPrice = state.filters.price >= 10000000 ? 
                `₹${(state.filters.price / 10000000).toFixed(1)} Cr` : 
                `₹${(state.filters.price / 100000).toFixed(0)} L`;
            chips.push({ label: `Max: ${formattedPrice}`, key: 'price', val: 60000000 });
        }
        // Area Min/Max
        if (state.filters.areaMin > 0) {
            chips.push({ label: `Min Area: ${state.filters.areaMin} sqft`, key: 'areaMin', val: 0 });
        }
        if (state.filters.areaMax < 999999) {
            chips.push({ label: `Max Area: ${state.filters.areaMax} sqft`, key: 'areaMax', val: 999999 });
        }
        // Amenities
        if (state.filters.amenities && state.filters.amenities.length > 0) {
            state.filters.amenities.forEach(amenity => {
                chips.push({ label: amenity, key: 'amenity', val: amenity });
            });
        }

        if (chips.length === 0) {
            chipsContainer.innerHTML = '';
            return;
        }

        chipsContainer.innerHTML = chips.map(chip => `
            <div class="filter-chip" onclick="UI.removeFilter('${chip.key}', '${chip.val}')">
                <span>${chip.label}</span>
                <span class="filter-chip-x">&times;</span>
            </div>
        `).join('') + `<button onclick="UI.resetFilters()" style="background:transparent; border:none; color:var(--text-muted); font-size:0.75rem; font-weight:700; cursor:pointer; padding:6px 10px;">Clear All</button>`;
    },

    // Remove single filter chip and update UI
    removeFilter(key, resetVal) {
        if (key === 'amenity') {
            state.filters.amenities = state.filters.amenities.filter(a => a !== resetVal);
            // Sync checkbox in desktop sidebar
            document.querySelectorAll(`.amenity-filter-cb[value="${resetVal}"]`).forEach(cb => cb.checked = false);
        } else {
            if (key === 'price') {
                state.filters.price = parseInt(resetVal);
                const slider = document.getElementById('filter-price-slider');
                if (slider) {
                    slider.value = resetVal;
                    document.getElementById('price-val-label').textContent = '₹6 Cr';
                }
            } else if (key === 'areaMin') {
                state.filters.areaMin = 0;
                const minIn = document.getElementById('filter-area-min');
                if (minIn) minIn.value = '';
            } else if (key === 'areaMax') {
                state.filters.areaMax = 999999;
                const maxIn = document.getElementById('filter-area-max');
                if (maxIn) maxIn.value = '';
            } else if (key === 'location') {
                state.filters.location = '';
                const locIn = document.getElementById('filter-loc-input');
                if (locIn) locIn.value = '';
            } else if (key === 'type') {
                state.filters.type = 'All';
                document.querySelectorAll('.type-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-val') === 'All'));
            } else if (key === 'bhk') {
                state.filters.bhk = 'All';
                document.querySelectorAll('.bhk-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-val') === 'All'));
            } else {
                state.filters[key] = resetVal;
            }
        }

        // Re-render
        this.renderFilterChips();
        this.hideMapPopover();
        this.renderListings();
    },

    // Grid / List Layout toggling action
    toggleResultsView(mode) {
        const listingsGrid = document.getElementById('listings-results-grid');
        if (!listingsGrid) return;

        if (mode === 'list') {
            document.getElementById('btn-view-list')?.classList.add('active');
            document.getElementById('btn-view-grid')?.classList.remove('active');
            state.viewMode = 'list';
        } else {
            document.getElementById('btn-view-grid')?.classList.add('active');
            document.getElementById('btn-view-list')?.classList.remove('active');
            state.viewMode = 'grid';
        }
        this.renderListings();
    },

    // Save active state filters configuration (simulated db snapshot)
    saveCurrentSearch() {
        if (!state.session.isLoggedIn) {
            state.showNotification("Save Search", "Please sign in to save searches to your profile.");
            return;
        }

        const criteriaLabel = [];
        if (state.filters.location) criteriaLabel.push(state.filters.location);
        if (state.filters.type !== 'All') criteriaLabel.push(state.filters.type);
        if (state.filters.bhk !== 'All') criteriaLabel.push(`${state.filters.bhk} BHK`);
        if (state.filters.areaMin > 0 || state.filters.areaMax < 999999) criteriaLabel.push(`Area Specified`);

        const summary = criteriaLabel.length > 0 ? criteriaLabel.join(' • ') : "All Listings Search";
        const querySnapshot = {
            id: Date.now(),
            label: summary,
            filters: { ...state.filters },
            timestamp: new Date().toLocaleDateString('en-IN', { hour: '2-digit', minute: '2-digit' })
        };

        state.recentSearches.push(querySnapshot);
        state.showNotification("Search Bookmarked!", "Saved to your dashboard directory.");
    },

    // Mobile filter off-canvas drawer controllers
    initMobileFilterDrawer() {
        const overlay = document.getElementById('mobile-filter-overlay');
        const drawer = document.getElementById('mobile-filter-drawer');
        const desktopPanel = document.getElementById('filters-panel-desktop');
        const drawerBody = document.getElementById('mobile-drawer-body');

        if (!drawer || !desktopPanel || !drawerBody) return;

        // Clone desktop filter nodes into mobile drawer body
        drawerBody.innerHTML = desktopPanel.innerHTML;
        drawerBody.querySelectorAll('#btn-reset-filters').forEach(b => b.remove()); // Remove duplicate reset button
        
        // Align active values inside mobile drawer
        this.syncDrawerFilters();
    },

    syncDrawerFilters() {
        const drawer = document.getElementById('mobile-filter-drawer');
        if (!drawer) return;

        // Sync values from state to drawer inputs
        const minIn = drawer.querySelector('#filter-area-min');
        const maxIn = drawer.querySelector('#filter-area-max');
        if (minIn) minIn.value = state.filters.areaMin > 0 ? state.filters.areaMin : '';
        if (maxIn) maxIn.value = state.filters.areaMax < 999999 ? state.filters.areaMax : '';

        // Sync checkboxes
        drawer.querySelectorAll('.amenity-filter-cb').forEach(cb => {
            cb.checked = state.filters.amenities.includes(cb.value);
        });

        // Sync selects
        const furnishing = drawer.querySelector('#filter-furnishing-select');
        if (furnishing) furnishing.value = state.filters.furnishing;
        const status = drawer.querySelector('#filter-status-select');
        if (status) status.value = state.filters.status;
    },

    openMobileFilterDrawer() {
        const overlay = document.getElementById('mobile-filter-overlay');
        const drawer = document.getElementById('mobile-filter-drawer');
        if (overlay && drawer) {
            overlay.classList.add('open');
            drawer.classList.add('open');
            this.syncDrawerFilters();
        }
    },

    closeMobileFilterDrawer() {
        const overlay = document.getElementById('mobile-filter-overlay');
        const drawer = document.getElementById('mobile-filter-drawer');
        if (overlay && drawer) {
            overlay.classList.remove('open');
            drawer.classList.remove('open');
        }
    },

    applyMobileFilters() {
        const drawer = document.getElementById('mobile-filter-drawer');
        if (!drawer) return;

        // Extract values from drawer inputs back to state
        const minIn = drawer.querySelector('#filter-area-min');
        const maxIn = drawer.querySelector('#filter-area-max');
        state.filters.areaMin = minIn && minIn.value ? parseInt(minIn.value) : 0;
        state.filters.areaMax = maxIn && maxIn.value ? parseInt(maxIn.value) : 999999;

        // Sync amenities checkboxes
        const selectedAmenities = [];
        drawer.querySelectorAll('.amenity-filter-cb:checked').forEach(cb => {
            selectedAmenities.push(cb.value);
        });
        state.filters.amenities = selectedAmenities;

        // Sync selects
        const furnishing = drawer.querySelector('#filter-furnishing-select');
        if (furnishing) state.filters.furnishing = furnishing.value;
        const status = drawer.querySelector('#filter-status-select');
        if (status) state.filters.status = status.value;

        // Sync to desktop sidebar inputs
        const dMin = document.getElementById('filter-area-min');
        const dMax = document.getElementById('filter-area-max');
        if (dMin) dMin.value = state.filters.areaMin > 0 ? state.filters.areaMin : '';
        if (dMax) dMax.value = state.filters.areaMax < 999999 ? state.filters.areaMax : '';

        document.querySelectorAll('.amenity-filter-cb').forEach(cb => {
            cb.checked = state.filters.amenities.includes(cb.value);
        });

        const dFurnishing = document.getElementById('filter-furnishing-select');
        if (dFurnishing) dFurnishing.value = state.filters.furnishing;
        const dStatus = document.getElementById('filter-status-select');
        if (dStatus) dStatus.value = state.filters.status;

        // Render updates
        this.renderFilterChips();
        this.hideMapPopover();
        this.renderListings();
        this.closeMobileFilterDrawer();
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
                    <div class="dropdown-menu" id="header-user-dropdown">
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

    // Renders the entire Dashboard (delegates with 400ms skeleton loading simulation)
    renderDashboardPage(activeTab = 'overview') {
        if (!state.session.isLoggedIn) {
            window.location.hash = '#login';
            return;
        }

        const skeleton = document.getElementById('dashboard-skeleton-loader');
        const panels = document.getElementById('dashboard-panels-container');
        
        if (skeleton && panels && !this._loadingDashboard) {
            this._loadingDashboard = true;
            skeleton.style.display = 'flex';
            panels.style.display = 'none';
            
            setTimeout(() => {
                if (skeleton) skeleton.style.display = 'none';
                if (panels) panels.style.display = 'block';
                this._loadingDashboard = false;
                this.renderDashboardInternal(activeTab);
            }, 400);
            return;
        }

        this.renderDashboardInternal(activeTab);
    },

    // Renders Overview Panel (KPI Cards, SVG Chart, Activity Log, and Latest Inquiries tables)
    renderDashboard() {
        const user = state.session.currentUser;
        if (!user) return;
        this.renderKPICards(user);
        this.renderOverviewChart(user);
        this.renderActivityFeed(user);
        this.renderOverviewTables(user);
    },

    renderDashboardInternal(activeTab) {
        const user = state.session.currentUser;
        if (!user) return;
        const isBuyer = user.role === 'Buyer';

        // 1. Sidebar role layout adaptation
        const listingsBtn = document.getElementById('sidebar-link-listings');
        const savedBtn = document.getElementById('sidebar-link-saved');
        const alertsBtn = document.getElementById('sidebar-link-alerts');
        const leadsBtn = document.getElementById('sidebar-link-leads');
        const visitsBtn = document.getElementById('sidebar-link-visits');
        const followupsBtn = document.getElementById('sidebar-link-followups');
        const analyticsBtn = document.getElementById('sidebar-link-analytics');
        const messagesBtn = document.getElementById('sidebar-link-messages');

        const savedText = document.getElementById('sidebar-text-saved');
        const listingsText = document.getElementById('sidebar-text-listings');
        const leadsText = document.getElementById('sidebar-text-leads');
        const visitsText = document.getElementById('sidebar-text-visits');
        const analyticsText = document.getElementById('sidebar-text-analytics');
        const messagesText = document.getElementById('sidebar-text-messages');

        if (user.role === 'Buyer') {
            if (listingsBtn) listingsBtn.style.display = 'none';
            if (alertsBtn) alertsBtn.style.display = 'flex';
            if (leadsBtn) leadsBtn.style.display = 'none';
            if (followupsBtn) followupsBtn.style.display = 'none';
            if (analyticsBtn) analyticsBtn.style.display = 'none';
            
            if (savedText) savedText.textContent = "Favorites";
            if (visitsText) visitsText.textContent = "Visit Requests";
            if (messagesText) messagesText.textContent = "Chat Inbox";
        } else if (user.role === 'Owner') {
            if (listingsBtn) {
                listingsBtn.style.display = 'flex';
                if (listingsText) listingsText.textContent = "My Listings";
            }
            if (alertsBtn) alertsBtn.style.display = 'none';
            if (leadsBtn) {
                leadsBtn.style.display = 'flex';
                if (leadsText) leadsText.textContent = "Leads";
            }
            if (followupsBtn) followupsBtn.style.display = 'none';
            if (analyticsBtn) {
                analyticsBtn.style.display = 'flex';
                if (analyticsText) analyticsText.textContent = "Property Performance";
            }
            
            if (savedText) savedText.textContent = "Saved Properties";
            if (visitsText) visitsText.textContent = "Site Visits";
            if (messagesText) messagesText.textContent = "Messages";
        } else if (user.role === 'Agent') {
            if (listingsBtn) {
                listingsBtn.style.display = 'flex';
                if (listingsText) listingsText.textContent = "Inventory";
            }
            if (alertsBtn) alertsBtn.style.display = 'none';
            if (leadsBtn) {
                leadsBtn.style.display = 'flex';
                if (leadsText) leadsText.textContent = "Lead Pipeline";
            }
            if (followupsBtn) followupsBtn.style.display = 'flex';
            if (analyticsBtn) {
                analyticsBtn.style.display = 'flex';
                if (analyticsText) analyticsText.textContent = "Analytics";
            }
            
            if (savedText) savedText.textContent = "Saved Properties";
            if (visitsText) visitsText.textContent = "Site Visits";
            if (messagesText) messagesText.textContent = "Messages";
        }

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

        // 4. Update tab titles and subtitles using complete mapping
        const tabTitle = document.getElementById('dashboard-tab-title');
        const tabSubtitle = document.getElementById('dashboard-tab-subtitle');
        if (tabTitle && tabSubtitle) {
            const tabLabels = {
                overview:  { title: 'Overview Dashboard',                          subtitle: `Welcome back to your LotLite console, ${user.name}.` },
                profile:   { title: 'My Profile',                                  subtitle: 'Update your account information and preferences' },
                saved:     { title: user.role === 'Buyer' ? 'Favorites Folder' : 'Saved Properties', subtitle: 'Quick access list of bookmarked property listings' },
                listings:  { title: user.role === 'Agent' ? 'Active Inventory' : 'My Listed Properties', subtitle: 'Review and manage your active property offerings' },
                leads:     { title: user.role === 'Agent' ? 'Lead Pipeline' : 'Property Inquiries', subtitle: 'View and manage prospects who have contacted you' },
                analytics: { title: user.role === 'Owner' ? 'Property Performance' : 'SaaS Performance Analytics', subtitle: 'Visual charts detailing search and lead analytics' },
                visits:    { title: user.role === 'Buyer' ? 'Visit Requests' : 'Site Visit Calendar', subtitle: 'Manage your scheduled property inspections' },
                messages:  { title: 'Messages & Chat',                             subtitle: 'Direct communication with leads, agents, and owners' },
                alerts:    { title: 'Property Alerts',                             subtitle: 'Get notified when new properties match your criteria' },
                followups: { title: 'Follow-up Tasks',                             subtitle: 'Track and manage your pending client follow-ups' },
                settings:  { title: 'Account Settings',                            subtitle: 'Manage notifications, preferences, and account security' }
            };
            const label = tabLabels[activeTab] || { title: activeTab.charAt(0).toUpperCase() + activeTab.slice(1), subtitle: '' };
            tabTitle.textContent = label.title;
            tabSubtitle.textContent = label.subtitle;
        }

        // 5. Populate user display parameters
        const sideName = document.getElementById('sidebar-user-name');
        const sideRole = document.getElementById('sidebar-user-role');
        const sideAvatar = document.getElementById('sidebar-user-avatar');
        const headName = document.getElementById('header-user-display-name');
        const headRoleLabel = document.getElementById('header-user-role-label');
        const headAvatar = document.getElementById('header-user-avatar');

        if (sideName) sideName.textContent = user.name;
        if (sideRole) sideRole.textContent = user.role;
        if (sideAvatar) sideAvatar.textContent = user.avatar;
        if (headName) headName.textContent = user.name;
        if (headRoleLabel) headRoleLabel.textContent = user.role;
        if (headAvatar) headAvatar.textContent = user.avatar;

        // Sync Notifications
        this.renderNotifications();

        // 6. Subpanel Data Rendering
        if (activeTab === 'overview') {
            this.renderDashboard();
        } 
        
        else if (activeTab === 'profile') {
            this.renderProfile();
        } 
        
        else if (activeTab === 'saved') {
            this.renderFavorites();
        } 
        
        else if (activeTab === 'listings') {
            this.renderListings();
        } 
        
        else if (activeTab === 'leads') {
            this.renderLeads();
        } 
        
        else if (activeTab === 'messages') {
            this.renderMessages();
        }

        else if (activeTab === 'alerts') {
            this.renderAlerts();
        }

        else if (activeTab === 'visits') {
            this.renderVisits();
        }

        else if (activeTab === 'followups') {
            this.renderFollowUps();
        }

        else if (activeTab === 'analytics') {
            this.renderAnalytics();
        }

        else if (activeTab === 'settings') {
            this.renderSettings();
        }

        // Run search filter setup
        this.setupDashboardSearch();
    },

    renderProfile() {
        const user = state.session.currentUser;
        if (!user) return;
        const pName = document.getElementById('profile-name');
        const pEmail = document.getElementById('profile-email');
        const pPhone = document.getElementById('profile-phone');
        const pRole = document.getElementById('profile-role');

        if (pName) pName.value = user.name;
        if (pEmail) pEmail.value = user.email;
        if (pPhone) pPhone.value = user.phone;
        if (pRole) pRole.value = user.role;
    },

    renderLeads() {
        const user = state.session.currentUser;
        if (!user) return;
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
    },

    renderAlerts() {
        this.renderAlertsPanel();
    },

    renderVisits() {
        const user = state.session.currentUser;
        if (!user) return;
        
        const upcomingTbody = document.getElementById('panel-upcoming-visits-tbody');
        const completedTbody = document.getElementById('panel-completed-visits-tbody');
        
        if (!upcomingTbody && !completedTbody) return;

        const isBuyer = user.role === 'Buyer';
        const email = user.email.toLowerCase();

        const allVisits = isBuyer 
            ? state.siteVisits.filter(v => v.name.toLowerCase() === user.name.toLowerCase())
            : state.siteVisits.filter(v => v.agentEmail.toLowerCase() === email);

        // Upcoming visits: Pending or Confirmed status
        const upcomingVisits = allVisits.filter(v => 
            v.status.toLowerCase() === 'pending' || v.status.toLowerCase() === 'confirmed'
        );

        // Completed / Past visits: Completed, Closed, Cancelled, Declined status
        const completedVisits = allVisits.filter(v => 
            v.status.toLowerCase() === 'completed' || v.status.toLowerCase() === 'closed' || v.status.toLowerCase() === 'cancelled' || v.status.toLowerCase() === 'declined'
        );

        // Render upcoming
        if (upcomingTbody) {
            if (upcomingVisits.length === 0) {
                upcomingTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:20px; color:var(--text-muted);">No upcoming site visits scheduled.</td></tr>`;
            } else {
                upcomingTbody.innerHTML = upcomingVisits.map(v => {
                    let actionButtons = '';
                    if (!isBuyer) {
                        actionButtons = `
                            <button class="btn-accent" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.approveVisit('${v.id}')">Approve</button>
                            <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.cancelVisit('${v.id}')">Decline</button>
                        `;
                    } else {
                        actionButtons = `<button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; border-color:var(--danger); color:var(--danger);" onclick="UI.cancelVisit('${v.id}')">Cancel Request</button>`;
                    }

                    return `
                        <tr>
                            <td><strong>${v.name}</strong></td>
                            <td>${v.propertyAddress}</td>
                            <td>${v.time}</td>
                            <td><span class="status-pill status-${v.status.toLowerCase()}">${v.status}</span></td>
                            <td>${actionButtons}</td>
                        </tr>
                    `;
                }).join('');
            }
        }

        // Render completed
        if (completedTbody) {
            if (completedVisits.length === 0) {
                completedTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:20px; color:var(--text-muted);">No historical site visits found.</td></tr>`;
            } else {
                completedTbody.innerHTML = completedVisits.map(v => `
                    <tr>
                        <td><strong>${v.name}</strong></td>
                        <td>${v.propertyAddress}</td>
                        <td>${v.time}</td>
                        <td><span class="status-pill status-${v.status.toLowerCase()}">${v.status}</span></td>
                        <td><span style="font-size:0.85rem; color:var(--text-muted);">Archived</span></td>
                    </tr>
                `).join('');
            }
        }
    },

    renderFollowUps() {
        this.renderFollowUpsPanel();
    },

    renderAnalytics() {
        const user = state.session.currentUser;
        if (user) {
            this.renderAnalyticsPanel(user);
        }
    },

    getChatUserInfo(email) {
        const mapping = {
            "buyer@lotlite.com": { name: "Vikram Malhotra", initials: "VM" },
            "rajiv@shah.com": { name: "Rajiv Shah", initials: "RS" },
            "preeti@patel.com": { name: "Preeti Patel", initials: "PP" },
            "neha@lotlite.com": { name: "Neha Sharma (Agent)", initials: "NS" },
            "rajesh@lotlite.com": { name: "Rajesh Verma (Agent)", initials: "RV" },
            "agent@lotlite.com": { name: "Support Agent", initials: "SA" }
        };
        if (mapping[email]) return mapping[email];
        
        // Fallback: extract from email
        const parts = email.split('@')[0].split('.');
        const name = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
        const initials = parts.map(p => p.charAt(0).toUpperCase()).join('');
        return { name, initials };
    },

    renderMessages() {
        const chatsListContainer = document.getElementById('inbox-chats-list');
        const chatMessagesContainer = document.getElementById('chat-messages-container');
        const chatHeaderName = document.getElementById('chat-header-name');
        const chatHeaderAvatar = document.getElementById('chat-header-avatar');
        const chatHeaderStatus = document.getElementById('chat-header-status');
        const searchInput = document.getElementById('chats-search-input');
        
        if (!chatsListContainer) return;

        // If no active chat selected, select the first one
        const chatUserIds = Object.keys(state.chats);
        if (chatUserIds.length > 0 && !state.activeChatUserId) {
            state.activeChatUserId = chatUserIds[0];
        }

        const activeUserId = state.activeChatUserId;
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

        // 1. Render left pane: list of chats
        if (chatUserIds.length === 0) {
            chatsListContainer.innerHTML = `<div style="padding: 20px; text-align:center; color: var(--text-muted);">No active chats.</div>`;
        } else {
            const filteredUserIds = chatUserIds.filter(email => {
                const info = this.getChatUserInfo(email);
                return info.name.toLowerCase().includes(searchQuery) || email.toLowerCase().includes(searchQuery);
            });

            chatsListContainer.innerHTML = filteredUserIds.map(email => {
                const info = this.getChatUserInfo(email);
                const msgs = state.chats[email] || [];
                const lastMsg = msgs.length > 0 ? msgs[msgs.length - 1].message : 'No messages';
                const isActive = email === activeUserId;

                return `
                    <div class="inbox-chat-item ${isActive ? 'active' : ''}" onclick="UI.selectActiveChat('${email}')">
                        <div class="inbox-avatar">${info.initials}</div>
                        <div class="inbox-info">
                            <h4>${info.name}</h4>
                            <p>${lastMsg}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 2. Render right pane: active chat details
        if (activeUserId) {
            const info = this.getChatUserInfo(activeUserId);
            if (chatHeaderName) chatHeaderName.textContent = info.name;
            if (chatHeaderAvatar) chatHeaderAvatar.textContent = info.initials;
            if (chatHeaderStatus) chatHeaderStatus.textContent = "Online";

            const msgs = state.chats[activeUserId] || [];
            if (chatMessagesContainer) {
                if (msgs.length === 0) {
                    chatMessagesContainer.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted);">No messages yet. Send a message to start conversation.</div>`;
                } else {
                    chatMessagesContainer.innerHTML = msgs.map(m => {
                        // A message is "mine" if sender matches current user's avatar initials
                        const currentAvatar = state.session.currentUser ? state.session.currentUser.avatar : null;
                        const isMe = currentAvatar && m.sender === currentAvatar;
                        const bubbleClass = isMe ? 'bubble-me' : 'bubble-them';
                        return `
                            <div class="chat-bubble ${bubbleClass}">
                                <div>${m.message}</div>
                                <div class="bubble-time">${m.time}</div>
                            </div>
                        `;
                    }).join('');
                    // Auto scroll to bottom
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
                }
            }
        } else {
            // No active chat selected
            if (chatHeaderName) chatHeaderName.textContent = "Select a Chat";
            if (chatHeaderAvatar) chatHeaderAvatar.textContent = "-";
            if (chatHeaderStatus) chatHeaderStatus.textContent = "";
            if (chatMessagesContainer) {
                chatMessagesContainer.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-muted);">Please select a conversation from the sidebar to start chatting.</div>`;
            }
        }

        // Bind search input events if not already done
        if (searchInput && !searchInput._hasInputListener) {
            searchInput._hasInputListener = true;
            searchInput.addEventListener('input', () => {
                this.renderMessages();
            });
        }
    },

    selectActiveChat(email) {
        state.activeChatUserId = email;
        this.renderMessages();
    },

    renderSettings() {
        const notifEmail = document.getElementById('settings-notif-email');
        const notifSms = document.getElementById('settings-notif-sms');
        const notifReports = document.getElementById('settings-notif-reports');
        const currencySelect = document.getElementById('settings-currency');
        
        // Load settings from localStorage
        const email = state.session.currentUser.email;
        const savedSettings = localStorage.getItem(`lotlite_settings_${email}`);
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            if (notifEmail) notifEmail.checked = settings.email ?? true;
            if (notifSms) notifSms.checked = settings.sms ?? true;
            if (notifReports) notifReports.checked = settings.reports ?? true;
            if (currencySelect) currencySelect.value = settings.currency ?? 'INR';
        }
        
        // Bind form submit if not already done
        const settingsForm = document.getElementById('settings-form');
        if (settingsForm && !settingsForm._hasSubmitListener) {
            settingsForm._hasSubmitListener = true;
            settingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const settings = {
                    email: notifEmail ? notifEmail.checked : true,
                    sms: notifSms ? notifSms.checked : true,
                    reports: notifReports ? notifReports.checked : true,
                    currency: currencySelect ? currencySelect.value : 'INR'
                };
                localStorage.setItem(`lotlite_settings_${email}`, JSON.stringify(settings));
                state.showNotification("Settings Saved", "Preferences updated successfully.");
            });
        }
    },

    // KPI Cards rendering logic
    renderKPICards(user) {
        const cardsGrid = document.getElementById('dashboard-kpi-cards');
        if (!cardsGrid) return;
        
        let cardsHTML = '';
        
        if (user.role === 'Buyer') {
            const savedCount = state.favorites.length;
            const searchCount = state.recentSearches.length;
            const visitCount = state.siteVisits.filter(v => v.name.toLowerCase() === user.name.toLowerCase()).length;
            const contactCount = Object.keys(state.chats).length;
            
            cardsHTML = `
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=saved'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--danger); background:rgba(239, 68, 68, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${savedCount}</h4>
                        <p class="card-label">Saved Properties</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#search'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--primary); background:rgba(79, 70, 229, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${searchCount}</h4>
                        <p class="card-label">Recent Searches</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=visits'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--warning); background:rgba(245, 158, 11, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${visitCount}</h4>
                        <p class="card-label">Site Visits</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=messages'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--accent); background:rgba(13, 148, 136, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${contactCount}</h4>
                        <p class="card-label">Contact Requests</p>
                    </div>
                </div>
            `;
        } else if (user.role === 'Owner') {
            const activeListings = state.getCurrentUserProperties().length;
            const totalViews = activeListings * 154; 
            const email = user.email.toLowerCase();
            const relevantLeads = state.leads.filter(l => l.agentEmail.toLowerCase() === email);
            const relevantVisits = state.siteVisits.filter(v => v.agentEmail.toLowerCase() === email);
            
            cardsHTML = `
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=listings'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--primary); background:rgba(79, 70, 229, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${activeListings}</h4>
                        <p class="card-label">Active Listings</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=analytics'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--accent); background:rgba(13, 148, 136, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${totalViews}</h4>
                        <p class="card-label">Total Views</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=leads'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--danger); background:rgba(239, 68, 68, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${relevantLeads.length}</h4>
                        <p class="card-label">Leads Received</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=visits'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--warning); background:rgba(245, 158, 11, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${relevantVisits.length}</h4>
                        <p class="card-label">Site Visits</p>
                    </div>
                </div>
            `;
        } else if (user.role === 'Agent') {
            const activeProps = state.getCurrentUserProperties().length;
            const email = user.email.toLowerCase();
            const relevantLeads = state.leads.filter(l => l.agentEmail.toLowerCase() === email);
            const relevantVisits = state.siteVisits.filter(v => v.agentEmail.toLowerCase() === email);
            
            const closedLeads = relevantLeads.filter(l => l.status === 'Closed' || l.status === 'Interested').length;
            const conversionRate = relevantLeads.length > 0 ? ((closedLeads / relevantLeads.length) * 100).toFixed(1) + '%' : '18.5%';

            cardsHTML = `
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=listings'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--primary); background:rgba(79, 70, 229, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${activeProps}</h4>
                        <p class="card-label">Active Properties</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=leads'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--accent); background:rgba(13, 148, 136, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${relevantLeads.length}</h4>
                        <p class="card-label">New Leads</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=visits'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--warning); background:rgba(245, 158, 11, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${relevantVisits.length}</h4>
                        <p class="card-label">Site Visits</p>
                    </div>
                </div>
                <div class="dashboard-card glass-panel" onclick="window.location.hash='#dashboard?tab=analytics'" style="cursor:pointer;">
                    <div class="card-icon-box" style="color:var(--danger); background:rgba(239, 68, 68, 0.1);">
                        <svg viewBox="0 0 24 24"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/></svg>
                    </div>
                    <div class="card-info-box">
                        <h4 class="card-stat">${conversionRate}</h4>
                        <p class="card-label">Conversion Rate</p>
                    </div>
                </div>
            `;
        }
        
        cardsGrid.innerHTML = cardsHTML;
    },

    // SVG Line/Bar charts drawing logic
    renderOverviewChart(user) {
        const container = document.getElementById('overview-chart-container');
        const legendContainer = document.getElementById('chart-legend-container');
        if (!container) return;

        let points = [];
        let labels = [];
        let seriesName = 'Activity';
        let legendHTML = '';

        if (user.role === 'Buyer') {
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            points = [20, 45, 28, 60, 55, 80]; 
            seriesName = 'Search Actions';
            legendHTML = `
                <div class="legend-item">
                    <span class="legend-color" style="background:var(--primary);"></span>
                    <span>${seriesName}</span>
                </div>
            `;
        } else if (user.role === 'Owner') {
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            points = [210, 340, 290, 480, 620, 920]; 
            seriesName = 'Listing Views';
            legendHTML = `
                <div class="legend-item">
                    <span class="legend-color" style="background:var(--primary);"></span>
                    <span>${seriesName}</span>
                </div>
            `;
        } else { // Agent
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            const dataset1 = [5, 12, 8, 18, 15, 22]; 
            const dataset2 = [3, 8, 5, 12, 10, 16]; 
            legendHTML = `
                <div class="legend-item">
                    <span class="legend-color" style="background:var(--primary);"></span>
                    <span>Leads</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color" style="background:var(--accent);"></span>
                    <span>Visits</span>
                </div>
            `;
            
            this.drawDoubleLineChart(container, labels, dataset1, dataset2);
            if (legendContainer) legendContainer.innerHTML = legendHTML;
            return;
        }

        if (legendContainer) legendContainer.innerHTML = legendHTML;
        this.drawSingleLineChart(container, labels, points, seriesName);
    },

    drawSingleLineChart(container, labels, points, seriesName) {
        const width = container.clientWidth || 500;
        const height = 220;
        const padding = 35;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        const maxVal = Math.max(...points) * 1.15;
        
        const coords = points.map((p, index) => {
            const x = padding + (index / (points.length - 1)) * chartWidth;
            const y = padding + chartHeight - (p / maxVal) * chartHeight;
            return { x, y };
        });

        let pathD = `M ${coords[0].x} ${coords[0].y}`;
        let areaD = `M ${coords[0].x} ${coords[0].y}`;
        
        for (let i = 1; i < coords.length; i++) {
            const cpX1 = coords[i-1].x + (coords[i].x - coords[i-1].x) / 2;
            const cpY1 = coords[i-1].y;
            const cpX2 = coords[i-1].x + (coords[i].x - coords[i-1].x) / 2;
            const cpY2 = coords[i].y;
            
            pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${coords[i].x} ${coords[i].y}`;
        }
        
        areaD = pathD + ` L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`;

        let svg = `
            <svg class="chart-svg" viewBox="0 0 ${width} ${height}" style="overflow:visible; width:100%; height:100%;">
                <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.25"/>
                        <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.00"/>
                    </linearGradient>
                </defs>
                <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" class="chart-grid-line" />
                <line x1="${padding}" y1="${padding + chartHeight/2}" x2="${width - padding}" y2="${padding + chartHeight/2}" class="chart-grid-line" />
                <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" class="chart-grid-line" />
                
                <path d="${areaD}" fill="url(#chartGrad)" />
                <path d="${pathD}" class="chart-line" />
                
                ${coords.map((c, i) => `
                    <circle cx="${c.x}" cy="${c.y}" r="5" fill="var(--bg-secondary)" stroke="var(--primary)" stroke-width="3" style="transition: r 0.2s; cursor:pointer;" onmouseover="this.setAttribute('r', '7')" onmouseout="this.setAttribute('r', '5')">
                        <title>${labels[i]}: ${points[i]}</title>
                    </circle>
                    <text x="${c.x}" y="${height - 10}" class="chart-axis-text" text-anchor="middle">${labels[i]}</text>
                `).join('')}
                
                <text x="${padding - 8}" y="${padding + 4}" class="chart-axis-text" text-anchor="end">${Math.round(maxVal)}</text>
                <text x="${padding - 8}" y="${padding + chartHeight/2 + 4}" class="chart-axis-text" text-anchor="end">${Math.round(maxVal/2)}</text>
                <text x="${padding - 8}" y="${height - padding + 4}" class="chart-axis-text" text-anchor="end">0</text>
            </svg>
        `;
        
        container.innerHTML = svg;
    },

    drawDoubleLineChart(container, labels, dataset1, dataset2) {
        const width = container.clientWidth || 500;
        const height = 220;
        const padding = 35;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;
        
        const maxVal = Math.max(...dataset1, ...dataset2) * 1.15;
        
        const getPath = (data) => {
            const coords = data.map((p, index) => {
                const x = padding + (index / (data.length - 1)) * chartWidth;
                const y = padding + chartHeight - (p / maxVal) * chartHeight;
                return { x, y };
            });
            let pathD = `M ${coords[0].x} ${coords[0].y}`;
            for (let i = 1; i < coords.length; i++) {
                const cpX1 = coords[i-1].x + (coords[i].x - coords[i-1].x) / 2;
                const cpY1 = coords[i-1].y;
                const cpX2 = coords[i-1].x + (coords[i].x - coords[i-1].x) / 2;
                const cpY2 = coords[i].y;
                pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${coords[i].x} ${coords[i].y}`;
            }
            return { pathD, coords };
        };

        const line1 = getPath(dataset1);
        const line2 = getPath(dataset2);

        let svg = `
            <svg class="chart-svg" viewBox="0 0 ${width} ${height}" style="overflow:visible; width:100%; height:100%;">
                <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" class="chart-grid-line" />
                <line x1="${padding}" y1="${padding + chartHeight/2}" x2="${width - padding}" y2="${padding + chartHeight/2}" class="chart-grid-line" />
                <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" class="chart-grid-line" />
                
                <path d="${line1.pathD}" class="chart-line" />
                <path d="${line2.pathD}" class="chart-line" style="stroke:var(--accent); filter: drop-shadow(0px 6px 8px rgba(13, 148, 136, 0.3));" />
                
                ${line1.coords.map((c, i) => `
                    <circle cx="${c.x}" cy="${c.y}" r="4" fill="var(--bg-secondary)" stroke="var(--primary)" stroke-width="2" style="cursor:pointer;">
                        <title>${labels[i]} (Leads): ${dataset1[i]}</title>
                    </circle>
                `).join('')}

                ${line2.coords.map((c, i) => `
                    <circle cx="${c.x}" cy="${c.y}" r="4" fill="var(--bg-secondary)" stroke="var(--accent)" stroke-width="2" style="cursor:pointer;">
                        <title>${labels[i]} (Visits): ${dataset2[i]}</title>
                    </circle>
                    <text x="${c.x}" y="${height - 10}" class="chart-axis-text" text-anchor="middle">${labels[i]}</text>
                `).join('')}
                
                <text x="${padding - 8}" y="${padding + 4}" class="chart-axis-text" text-anchor="end">${Math.round(maxVal)}</text>
                <text x="${padding - 8}" y="${padding + chartHeight/2 + 4}" class="chart-axis-text" text-anchor="end">${Math.round(maxVal/2)}</text>
                <text x="${padding - 8}" y="${height - padding + 4}" class="chart-axis-text" text-anchor="end">0</text>
            </svg>
        `;
        
        container.innerHTML = svg;
    },

    // Activity Feed rendering
    renderActivityFeed(user) {
        const feedContainer = document.getElementById('overview-activity-feed');
        if (!feedContainer) return;

        let feedItems = [];

        if (user.role === 'Buyer') {
            feedItems = [
                { type: 'alert', text: 'New property matching Hinjawadi Alert: <strong>Ganga Acropolis</strong>', time: '12m ago', color: 'var(--primary)', bg: 'var(--primary-light)' },
                { type: 'visit', text: 'Visit requested for <strong>Kolte-Patil Life Republic</strong> confirmed', time: '2h ago', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
                { type: 'message', text: 'New message from agent <strong>Rahul Deshmukh</strong>', time: '4h ago', color: 'var(--accent)', bg: 'var(--accent-light)' },
                { type: 'search', text: 'You performed a search for <strong>villas in Koregaon Park</strong>', time: 'Yesterday', color: 'var(--warning)', bg: 'rgba(245, 158, 11, 0.1)' }
            ];
        } else if (user.role === 'Owner') {
            feedItems = [
                { type: 'lead', text: 'Lead <strong>Anjali Gupta</strong> submitted contact request for VTP Condo', time: '10m ago', color: 'var(--danger)', bg: 'rgba(239, 68, 68, 0.1)' },
                { type: 'visit', text: 'Visitor scheduled inspection at <strong>Skyline Oasis Apartments</strong>', time: '1h ago', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
                { type: 'view', text: 'Your property <strong>Skyline Oasis</strong> surpassed 500 views', time: '5h ago', color: 'var(--accent)', bg: 'var(--accent-light)' },
                { type: 'listing', text: 'Your new listing <strong>Sohna Road Luxury Villa</strong> is now published', time: '3 days ago', color: 'var(--primary)', bg: 'var(--primary-light)' }
            ];
        } else { 
            feedItems = [
                { type: 'lead', text: 'New Lead <strong>Devendra Joshi</strong> assigned to Hinjawadi territory', time: '5m ago', color: 'var(--primary)', bg: 'var(--primary-light)' },
                { type: 'visit', text: 'Site visit with <strong>Vikram Malhotra</strong> marked completed', time: '1h ago', color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
                { type: 'message', text: 'Inquiry response sent to <strong>Rajiv Shah</strong>', time: '3h ago', color: 'var(--accent)', bg: 'var(--accent-light)' },
                { type: 'alert', text: 'Price drop notification sent to 12 watchlisted buyers', time: 'Yesterday', color: 'var(--warning)', bg: 'rgba(245, 158, 11, 0.1)' }
            ];
        }

        const icons = {
            alert: '🔔',
            visit: '📅',
            message: '💬',
            search: '🔍',
            lead: '👥',
            view: '👁️',
            listing: '🏠'
        };

        feedContainer.innerHTML = feedItems.map(item => `
            <div class="activity-item">
                <div class="activity-icon" style="color:${item.color}; background:${item.bg};">${icons[item.type] || '⚡'}</div>
                <div class="activity-details">
                    <p>${item.text}</p>
                    <span>${item.time}</span>
                </div>
            </div>
        `).join('');
    },

    // Overview Tables rendering
    renderOverviewTables(user) {
        const t1Title = document.getElementById('overview-table-1-title');
        const t1Sub = document.getElementById('overview-table-1-subtitle');
        const t1Thead = document.getElementById('overview-table-1-thead');
        const t1Tbody = document.getElementById('overview-table-1-tbody');

        const t2Title = document.getElementById('overview-table-2-title');
        const t2Sub = document.getElementById('overview-table-2-subtitle');
        const t2Thead = document.getElementById('overview-table-2-thead');
        const t2Tbody = document.getElementById('overview-table-2-tbody');

        if (!t1Title || !t2Title) return;

        if (user.role === 'Buyer') {
            t1Title.textContent = "Recent Searches";
            t1Sub.textContent = "Your latest search filters and query criteria";
            t1Thead.innerHTML = `
                <tr>
                    <th>Search Query</th>
                    <th>Property Type</th>
                    <th>Budget Range</th>
                    <th>Date Checked</th>
                </tr>
            `;
            t1Tbody.innerHTML = state.recentSearches.map(s => `
                <tr>
                    <td><strong>${s.query}</strong></td>
                    <td>${s.type}</td>
                    <td>${s.budget}</td>
                    <td>${s.date}</td>
                </tr>
            `).join('');

            t2Title.textContent = "Visit Requests";
            t2Sub.textContent = "Properties you have requested to view in person";
            t2Thead.innerHTML = `
                <tr>
                    <th>Property Address</th>
                    <th>Scheduled Time</th>
                    <th>Status</th>
                </tr>
            `;
            const myVisits = state.siteVisits.filter(v => v.name.toLowerCase() === user.name.toLowerCase());
            if (myVisits.length === 0) {
                t2Tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; padding:20px; color:var(--text-muted);">No visits requested.</td></tr>`;
            } else {
                t2Tbody.innerHTML = myVisits.map(v => `
                    <tr>
                        <td><strong>${v.propertyAddress}</strong></td>
                        <td>${v.time}</td>
                        <td><span class="status-pill status-${v.status.toLowerCase()}">${v.status}</span></td>
                    </tr>
                `).join('');
            }
        } 
        
        else if (user.role === 'Owner') {
            t1Title.textContent = "My Active Properties";
            t1Sub.textContent = "Properties you have listed for sale/rent";
            t1Thead.innerHTML = `
                <tr>
                    <th>Property Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            `;
            const myProps = state.getCurrentUserProperties();
            if (myProps.length === 0) {
                t1Tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No properties listed.</td></tr>`;
            } else {
                t1Tbody.innerHTML = myProps.map(p => `
                    <tr>
                        <td><strong>${p.title}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">${p.location}</span></td>
                        <td>${p.type}</td>
                        <td>₹${(p.price / 10000000).toFixed(2)} Cr</td>
                        <td><span class="status-pill status-interested">${p.purpose.toUpperCase()}</span></td>
                    </tr>
                `).join('');
            }

            t2Title.textContent = "Recent Inquiries";
            t2Sub.textContent = "Latest interest submissions on your listings";
            t2Thead.innerHTML = `
                <tr>
                    <th>Lead Name</th>
                    <th>Property</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            `;
            const email = user.email.toLowerCase();
            const myLeads = state.leads.filter(l => l.agentEmail.toLowerCase() === email);
            if (myLeads.length === 0) {
                t2Tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No inquiries received.</td></tr>`;
            } else {
                t2Tbody.innerHTML = myLeads.map(l => `
                    <tr>
                        <td><strong>${l.name}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">${l.phone}</span></td>
                        <td>${l.propertyName}</td>
                        <td><span class="status-pill status-${l.status.toLowerCase()}">${l.status}</span></td>
                        <td>${l.date}</td>
                    </tr>
                `).join('');
            }
        } 
        
        else if (user.role === 'Agent') {
            t1Title.textContent = "Lead Pipeline Tracking";
            t1Sub.textContent = "Prospective buyers currently in discussion";
            t1Thead.innerHTML = `
                <tr>
                    <th>Lead Name</th>
                    <th>Property Interested</th>
                    <th>Status</th>
                    <th>Action Date</th>
                </tr>
            `;
            const email = user.email.toLowerCase();
            const relevantLeads = state.leads.filter(l => l.agentEmail.toLowerCase() === email);
            if (relevantLeads.length === 0) {
                t1Tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No leads active.</td></tr>`;
            } else {
                t1Tbody.innerHTML = relevantLeads.map(l => `
                    <tr>
                        <td><strong>${l.name}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">${l.phone}</span></td>
                        <td>${l.propertyName}</td>
                        <td><span class="status-pill status-${l.status.toLowerCase()}">${l.status}</span></td>
                        <td>${l.date}</td>
                    </tr>
                `).join('');
            }

            t2Title.textContent = "Scheduled Site Visits";
            t2Sub.textContent = "Calendar schedule for property physical viewings";
            t2Thead.innerHTML = `
                <tr>
                    <th>Visitor Name</th>
                    <th>Property Address</th>
                    <th>Schedule Time</th>
                    <th>Status</th>
                </tr>
            `;
            const relevantVisits = state.siteVisits.filter(v => v.agentEmail.toLowerCase() === email);
            if (relevantVisits.length === 0) {
                t2Tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">No visits scheduled.</td></tr>`;
            } else {
                t2Tbody.innerHTML = relevantVisits.map(v => `
                    <tr>
                        <td><strong>${v.name}</strong></td>
                        <td>${v.propertyAddress}</td>
                        <td>${v.time}</td>
                        <td><span class="status-pill status-${v.status.toLowerCase()}">${v.status}</span></td>
                    </tr>
                `).join('');
            }
        }
    },

    // Alerts Panel rendering
    renderAlertsPanel() {
        const tbody = document.getElementById('panel-alerts-tbody');
        if (!tbody) return;

        if (state.propertyAlerts.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No alerts configured. Click "Create Alert" to start.</td></tr>`;
            return;
        }

        tbody.innerHTML = state.propertyAlerts.map(a => `
            <tr>
                <td><strong>${a.query}</strong></td>
                <td>${a.type}</td>
                <td>₹${(a.minPrice/100000).toFixed(0)} L - ₹${(a.maxPrice/10000000).toFixed(2)} Cr</td>
                <td><span style="font-weight:700; color:var(--primary);">${a.matches} matches</span></td>
                <td><span class="status-pill status-${a.active ? 'interested' : 'closed'}">${a.active ? 'Active' : 'Muted'}</span></td>
                <td>
                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; border-color:var(--primary); color:var(--primary);" onclick="UI.toggleAlertStatus('${a.id}')">Toggle</button>
                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; border-color:var(--danger); color:var(--danger);" onclick="UI.deleteAlert('${a.id}')">Delete</button>
                </td>
            </tr>
        `).join('');
    },

    // Visits Panel rendering
    renderVisitsPanel(user) {
        const tbody = document.getElementById('panel-visits-tbody');
        if (!tbody) return;

        const isBuyer = user.role === 'Buyer';
        const email = user.email.toLowerCase();

        const list = isBuyer 
            ? state.siteVisits.filter(v => v.name.toLowerCase() === user.name.toLowerCase())
            : state.siteVisits.filter(v => v.agentEmail.toLowerCase() === email);

        if (list.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--text-muted);">No scheduled visits found.</td></tr>`;
            return;
        }

        tbody.innerHTML = list.map(v => {
            let actionButtons = '';
            if (!isBuyer) {
                actionButtons = `
                    <button class="btn-accent" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.approveVisit('${v.id}')">Approve</button>
                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.cancelVisit('${v.id}')">Decline</button>
                `;
            } else {
                actionButtons = `<button class="btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; border-color:var(--danger); color:var(--danger);" onclick="UI.cancelVisit('${v.id}')">Cancel Request</button>`;
            }

            return `
                <tr>
                    <td><strong>${v.name}</strong></td>
                    <td>${v.propertyAddress}</td>
                    <td>${v.time}</td>
                    <td><span class="status-pill status-${v.status.toLowerCase()}">${v.status}</span></td>
                    <td>${actionButtons}</td>
                </tr>
            `;
        }).join('');
    },

    // Follow-ups Panel rendering
    renderFollowUpsPanel() {
        const tbody = document.getElementById('panel-followups-tbody');
        if (!tbody) return;

        if (state.followUps.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">All tasks completed! Good job.</td></tr>`;
            return;
        }

        tbody.innerHTML = state.followUps.map(f => {
            const priorityColors = {
                High: 'var(--danger)',
                Medium: 'var(--warning)',
                Low: 'var(--accent)'
            };
            const priorityColor = priorityColors[f.priority] || 'var(--text-secondary)';

            return `
                <tr>
                    <td><strong>${f.leadName}</strong></td>
                    <td>${f.task}</td>
                    <td>${f.dueDate}</td>
                    <td><span style="font-weight:700; color:${priorityColor};">${f.priority}</span></td>
                    <td><span class="status-pill status-${f.done ? 'completed' : 'pending'}">${f.done ? 'Done' : 'Pending'}</span></td>
                    <td>
                        <button class="btn-primary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="UI.toggleFollowUp('${f.id}')">${f.done ? 'Reopen' : 'Mark Done'}</button>
                    </td>
                </tr>
            `;
        }).join('');
    },

    // Analytics Panel rendering
    renderAnalyticsPanel(user) {
        const funnelContainer = document.getElementById('analytics-conversion-funnel');
        const chartContainer = document.getElementById('analytics-growth-chart-container');
        if (!funnelContainer) return;

        const stages = [
            { label: 'Total Inquiries', count: 180, percentage: 100, color: 'var(--primary)' },
            { label: 'Contacted Leads', count: 120, percentage: 66, color: 'var(--accent)' },
            { label: 'Site Visits', count: 48, percentage: 26, color: 'var(--warning)' },
            { label: 'Offers / Closures', count: 12, percentage: 6.6, color: 'var(--success)' }
        ];

        funnelContainer.innerHTML = stages.map(s => `
            <div class="funnel-stage">
                <div class="funnel-label-row">
                    <span>${s.label}</span>
                    <span><strong>${s.count}</strong> (${s.percentage}%)</span>
                </div>
                <div class="funnel-bar-bg">
                    <div class="funnel-bar-fill" style="width: ${s.percentage}%; background: ${s.color};"></div>
                </div>
            </div>
        `).join('');

        if (chartContainer) {
            const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            const points = [800, 1100, 950, 1400, 1800, 2400]; 
            this.drawSingleLineChart(chartContainer, labels, points, 'Aggregate Views');
        }
    },

    // Notifications populator
    renderNotifications() {
        const container = document.getElementById('notifications-items-container');
        const countBadge = document.getElementById('dashboard-notif-count');
        if (!container) return;

        const unread = state.notifications.filter(n => !n.read);
        if (countBadge) {
            countBadge.textContent = unread.length;
            countBadge.style.opacity = unread.length === 0 ? '0' : '1';
        }

        if (state.notifications.length === 0) {
            container.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted); font-size:0.85rem;">No notifications.</div>`;
            return;
        }

        container.innerHTML = state.notifications.map(n => `
            <div class="dropdown-item" style="cursor:pointer; padding: 12px 16px; border-bottom:1px solid var(--border-color); ${n.read ? '' : 'background: rgba(79, 70, 229, 0.03);'}" onclick="UI.readNotification('${n.id}', event)">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <strong>${n.title}</strong>
                    ${n.read ? '' : '<span style="width:6px; height:6px; background:var(--danger); border-radius:50%; display:inline-block; margin-top:4px;"></span>'}
                </div>
                <p style="margin: 4px 0 0 0; font-size: 0.8rem; color:var(--text-secondary);">${n.text}</p>
                <span class="time" style="font-size: 0.7rem; color:var(--text-muted); display:block; margin-top:4px;">${n.time}</span>
            </div>
        `).join('');
    },

    // UI actions callbacks
    toggleAlertStatus(id) {
        const alert = state.propertyAlerts.find(a => a.id === id);
        if (alert) {
            alert.active = !alert.active;
            localStorage.setItem('lotlite_alerts_db', JSON.stringify(state.propertyAlerts));
            this.renderAlerts();
            state.showNotification("Alert Updated", `Search alert has been ${alert.active ? 'activated' : 'muted'}.`);
        }
    },

    deleteAlert(id) {
        const index = state.propertyAlerts.findIndex(a => a.id === id);
        if (index !== -1) {
            state.propertyAlerts.splice(index, 1);
            localStorage.setItem('lotlite_alerts_db', JSON.stringify(state.propertyAlerts));
            this.renderAlerts();
            state.showNotification("Alert Deleted", "Search alert has been removed.");
        }
    },

    toggleFollowUp(id) {
        const task = state.followUps.find(f => f.id === id);
        if (task) {
            task.done = !task.done;
            localStorage.setItem('lotlite_followups_db', JSON.stringify(state.followUps));
            this.renderFollowUps();
            state.showNotification("Task Updated", `Task marked ${task.done ? 'completed' : 'pending'}.`);
        }
    },

    approveVisit(id) {
        const visit = state.siteVisits.find(v => v.id === id);
        if (visit) {
            visit.status = 'Confirmed';
            localStorage.setItem('lotlite_site_visits_db', JSON.stringify(state.siteVisits));
            this.renderVisits();
            state.showNotification("Visit Approved", `Site visit request with ${visit.name} is confirmed.`);
        }
    },

    cancelVisit(id) {
        const visit = state.siteVisits.find(v => v.id === id);
        if (visit) {
            visit.status = 'Closed';
            localStorage.setItem('lotlite_site_visits_db', JSON.stringify(state.siteVisits));
            this.renderVisits();
            state.showNotification("Visit Cancelled", `Visit request marked cancelled.`);
        }
    },

    readNotification(id, event) {
        if (event) event.stopPropagation();
        const notif = state.notifications.find(n => n.id === id);
        if (notif) {
            notif.read = true;
            localStorage.setItem('lotlite_notifications_db', JSON.stringify(state.notifications));
            this.renderNotifications();
        }
    },

    clearNotifications() {
        state.notifications.forEach(n => n.read = true);
        localStorage.setItem('lotlite_notifications_db', JSON.stringify(state.notifications));
        this.renderNotifications();
        state.showNotification("Cleared", "All notifications marked as read.");
    },

    createAlert() {
        const query = prompt("Enter alert search term (e.g. '3 BHK Hinjawadi'):", "2 BHK Baner");
        if (!query) return;
        const type = prompt("Enter property type ('Apartment', 'Villa', 'Plot'):", "Apartment");
        if (!type) return;
        
        const newAlert = {
            id: 'alert-' + Date.now(),
            query: query,
            type: type,
            minPrice: 4000000,
            maxPrice: 15000000,
            active: true,
            matches: Math.floor(Math.random() * 8) + 1
        };

        state.propertyAlerts.push(newAlert);
        localStorage.setItem('lotlite_alerts_db', JSON.stringify(state.propertyAlerts));
        this.renderAlerts();
        state.showNotification("Alert Configured", "You will be notified of matches matching: " + query);
    },

    // Search bar filter logic
    setupDashboardSearch() {
        const searchInput = document.getElementById('dashboard-search-input');
        if (!searchInput || this._searchSetupDone) return;
        this._searchSetupDone = true;

        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                const isAuthPage = window.location.hash.startsWith('#login') || window.location.hash.startsWith('#signup');
                if (!isAuthPage) {
                    e.preventDefault();
                    searchInput.focus();
                }
            }
        });

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            this.filterDashboardView(query);
        });
    },

    filterDashboardView(query) {
        const activePanel = document.querySelector('.dashboard-panel.active');
        if (!activePanel) return;

        // Filter table rows (leads, visits, followups)
        const rows = activePanel.querySelectorAll('tbody tr');
        if (rows.length > 0) {
            rows.forEach(row => {
                if (row.cells.length === 1 && row.cells[0].textContent.includes('No')) return; // Skip empty-state rows
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(query) ? '' : 'none';
            });
        }

        // Filter property cards (saved, listings)
        const cards = activePanel.querySelectorAll('.cards-grid .property-card');
        if (cards.length > 0) {
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? '' : 'none';
            });
        }

        // Filter activity feed items (overview)
        const activityItems = activePanel.querySelectorAll('.activity-item');
        if (activityItems.length > 0) {
            activityItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        }

        // Filter alert items (alerts panel)
        const alertItems = activePanel.querySelectorAll('.alert-item, .followup-item');
        if (alertItems.length > 0) {
            alertItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        }
    },

    startDirectChat(email, name) {
        state.activeChatUserId = email;
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
            this.renderDashboardPage('leads');
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

    /**
     * Returns the list of valid dashboard tab names for a given user role.
     * Centralised to avoid duplication across permission checks.
     */
    getRoleValidTabs(role) {
        const buyerTabs = ['overview', 'profile', 'saved', 'alerts', 'visits', 'messages', 'settings'];
        const ownerTabs = ['overview', 'profile', 'saved', 'listings', 'leads', 'visits', 'analytics', 'messages', 'settings'];
        const agentTabs = ['overview', 'profile', 'saved', 'listings', 'leads', 'visits', 'followups', 'analytics', 'messages', 'settings'];
        if (role === 'Owner') return ownerTabs;
        if (role === 'Agent') return agentTabs;
        return buyerTabs;
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

        // Update nav links active state — match by path only (ignoring query strings)
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href') || '';
            const linkPath = href.substring(1).split('?')[0]; // strip leading # and query
            let isActive = linkPath === routePath;

            // For search route: also match Buy/Rent tabs by current filter purpose
            if (routePath === 'search' && href.includes('purpose=')) {
                const purposeParam = new URLSearchParams(href.split('?')[1] || '').get('purpose');
                isActive = purposeParam === state.filters.purpose;
            }

            link.classList.toggle('active', isActive);
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
            let activeTab = '';
            if (queryStr) {
                const params = new URLSearchParams(queryStr);
                if (params.has('tab')) {
                    activeTab = params.get('tab');
                }
            }

            // Map user-requested 'favorites' to internal 'saved' tab
            if (activeTab === 'favorites') {
                activeTab = 'saved';
            }

            const user = state.session.currentUser;

            // Validate dashboard tab permissions using centralised helper
            if (user && activeTab) {
                const validTabs = this.getRoleValidTabs(user.role);
                if (!validTabs.includes(activeTab)) {
                    window.location.hash = '#dashboard?tab=overview';
                    return;
                }
            }

            // On refresh or default navigation without activeTab — restore last tab
            if (!activeTab) {
                activeTab = localStorage.getItem('lotlite_last_dashboard_tab') || 'overview';
                // Validate restored tab against current user's role
                if (user) {
                    const validTabs = this.getRoleValidTabs(user.role);
                    if (!validTabs.includes(activeTab)) activeTab = 'overview';
                }
                window.location.hash = `#dashboard?tab=${activeTab}`;
                return;
            }

            // Persist valid active tab for session/refresh restoration
            localStorage.setItem('lotlite_last_dashboard_tab', activeTab);
            UI.renderDashboardPage(activeTab);
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

    // C9. Area Range Filters (NEW)
    const areaMinEl = document.getElementById('filter-area-min');
    const areaMaxEl = document.getElementById('filter-area-max');
    const handleAreaFilter = () => {
        state.filters.areaMin = areaMinEl && areaMinEl.value ? parseInt(areaMinEl.value) : 0;
        state.filters.areaMax = areaMaxEl && areaMaxEl.value ? parseInt(areaMaxEl.value) : 999999;
        UI.renderFilterChips();
        UI.hideMapPopover();
        UI.renderListings();
    };
    if (areaMinEl) areaMinEl.addEventListener('input', handleAreaFilter);
    if (areaMaxEl) areaMaxEl.addEventListener('input', handleAreaFilter);

    // C10. Amenities Filter Checkboxes (NEW)
    const setupAmenitiesListener = () => {
        document.querySelectorAll('.amenity-filter-cb').forEach(cb => {
            cb.addEventListener('change', () => {
                const checked = [];
                // Query only current visible checkboxes (sidebar or drawer depending on where click happened)
                const scope = cb.closest('#mobile-filter-drawer') ? '#mobile-filter-drawer' : '#filters-panel-desktop';
                document.querySelectorAll(`${scope} .amenity-filter-cb:checked`).forEach(c => {
                    checked.push(c.value);
                });
                state.filters.amenities = checked;
                
                // Sync value to opposite layout element (desktop to drawer or vice versa)
                const oppositeScope = scope === '#mobile-filter-drawer' ? '#filters-panel-desktop' : '#mobile-filter-drawer';
                document.querySelectorAll(`${oppositeScope} .amenity-filter-cb`).forEach(otherCb => {
                    otherCb.checked = checked.includes(otherCb.value);
                });

                UI.renderFilterChips();
                UI.hideMapPopover();
                UI.renderListings();
            });
        });
    };
    setupAmenitiesListener();

    // C11. View Grid/List togglers (NEW)
    document.getElementById('btn-view-grid')?.addEventListener('click', () => {
        UI.toggleResultsView('grid');
    });
    document.getElementById('btn-view-list')?.addEventListener('click', () => {
        UI.toggleResultsView('list');
    });

    // C12. Save search trigger (NEW)
    document.getElementById('btn-save-search')?.addEventListener('click', () => {
        UI.saveCurrentSearch();
    });

    // C13. Mobile Drawer Controls (NEW)
    document.getElementById('btn-mobile-filter-open')?.addEventListener('click', () => {
        UI.openMobileFilterDrawer();
    });
    document.getElementById('btn-mobile-filter-close')?.addEventListener('click', () => {
        UI.closeMobileFilterDrawer();
    });
    document.getElementById('mobile-filter-overlay')?.addEventListener('click', () => {
        UI.closeMobileFilterDrawer();
    });
    document.getElementById('btn-drawer-apply')?.addEventListener('click', () => {
        UI.applyMobileFilters();
    });
    document.getElementById('btn-drawer-reset')?.addEventListener('click', () => {
        UI.resetFilters();
        UI.closeMobileFilterDrawer();
    });

    // Initialize Mobile Filter Drawer contents & Chips display on load
    UI.initMobileFilterDrawer();
    UI.renderFilterChips();

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

            // Assign high-quality Indian Flat images
            const randomOffset = Math.floor(Math.random() * INDIAN_FLAT_IMAGES.length);
            const propImages = [];
            for (let i = 0; i < 5; i++) {
                propImages.push(INDIAN_FLAT_IMAGES[(randomOffset + i) % INDIAN_FLAT_IMAGES.length]);
            }
            const image = propImages[0];
            
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
                images: propImages,
                featured: false,
                furnishing,
                constructionStatus: status,
                age,
                amenities: amenities.length > 0 ? amenities : ["Power Backup", "24/7 Security", "Parking"],
                agent: {
                    name: state.session.isLoggedIn ? state.session.currentUser.name : 'Self-Listed',
                    phone: state.session.isLoggedIn ? state.session.currentUser.phone : '+91 99999 88888',
                    email: state.session.isLoggedIn ? state.session.currentUser.email : 'unknown@lotlite.com',
                    avatar: state.session.isLoggedIn ? state.session.currentUser.avatar : 'ME'
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

    // G. Listen to Auth change event to rebuild header and re-render dashboard if active
    window.addEventListener('authChanged', () => {
        UI.updateHeader();
        if (window.location.hash.startsWith('#dashboard')) {
            // Read the current active tab from URL so re-render preserves the panel
            const hashStr = window.location.hash.substring(1);
            const queryStr = hashStr.split('?')[1] || '';
            const params = new URLSearchParams(queryStr);
            const activeTab = params.get('tab') || 'overview';
            UI.renderDashboardPage(activeTab);
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

    // M2. Clear notifications
    const clearNotifBtn = document.getElementById('btn-clear-notifications');
    if (clearNotifBtn) {
        clearNotifBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            UI.clearNotifications();
        });
    }

    // M3. Create alert
    const createAlertBtn = document.getElementById('btn-create-alert');
    if (createAlertBtn) {
        createAlertBtn.addEventListener('click', () => {
            UI.createAlert();
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
            UI.renderMessages();

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
                    UI.renderMessages();
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
