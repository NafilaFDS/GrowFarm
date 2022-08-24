import trainig1 from "../assets/images/training/training-1.jpg";
import trainig2 from "../assets/images/training/training-2.jpg";
import trainig3 from "../assets/images/training/training-3.jpg";
import trainig4 from "../assets/images/training/training-4.jpeg";


const language = {
    en: {
        submitBtn: "Submit",
        header: {
            authBtn: ['Farmer Login', 'Buyer Login', 'Sign Up', 'Admin'],
            lang: "Language",
            menu: {
                general: ['Home', 'About Us', 'Training'],
                admin: ["Dashboard", "Farmer List", "Buyer List", "Complain List", "Profile", "Crop Advertise", "Logout"],
                farmer: ["Profile", "Complain", "Crop Advertise", "Farming Tips", "Logout"],
                buyer: ["Profile", "Post Advertise", "My Advertise", "Logout"]
            }
        },
        login: {
            heading: {
                admin: "Admin Login",
                farmer: "Farmer Login",
                buyer: "Buyer Login"
            },
            form: ["Mobile", "Password"]
        },
        signup: {
            heading: {
                farmer: "Farmer Registration",
                buyer: "Buyer Registration"
            },
            form: ["Name", "Mobile", "Email", "Address", "Password"]
        },
        myProfile: {
            heading: 'Edit Profile',
            form: ["Name", "Mobile", "Email", "Address"]
        },
        complain: {
            heading: 'Complain Status Detail',
            table: ["Complain", "Response", "View Profile"]
        },
        cropAdvertise: {
            heading: 'Crop Advertisement Detail',
            table: ["Action", "Crop Name", "Crop Image", "Required Quantity(kg)", "Buyer Information", "My Response"]
        },
        myResponse: {
            heading: 'My Response',
            table: ["Available Quantity", "Price", "Date", "Payment Status"]
        },
        postAdvertise: {
            heading: "Post your required crop",
            form: ["Crop Name", "Crop Image", "Location", "Required Quantity(kg)"]
        },
        myAdvertise: {
            heading: 'My advertise',
            table: ["Crop Name", "Crop Image", "Required Quantity(kg)", "Status", "Response"]
        },
        receivedCrop: {
            heading: 'Received Crop Detail',
            table: ["Make Payment", "Farmer Details", "Date", "Available Quantity", "Price(tk)", "Payment Status"]
        },
        advertiseApprove: {
            heading: 'Crop Advertisement',
            table: ["Crop Name", "Crop Image", "Required Quantity(kg)", "Buyer Information", "Status", "Action", "Sale History"]
        },
        sell: {
            heading: 'Sell Crop',
            form: ["Quantity", "Price"]
        },
        invoice: {
            heading: 'Invoice',
            list: ["Price(tk)", "Grow Farm commission(tk)", "Total(tk)"],
            btn: "Pay Now"
        },
        farmingTips: {
            heading: 'Farming Tips',
            description: "Farming is a profession where without hard-work there is no way to succeed. However, some easy but not very well-known tips are sure to make you successful in farming sooner than you thought.",
            tips: [
                {
                    title: "Know the best crops for your soil",
                    description: "You can use your time and land profitably if you have deep knowledge about your land. Soil types depend on the geography of your region. Not all crops grow in the same type of soil. Knowing that, find out what type of crop is the most beneficial for your land."
                },
                {
                    title: "Have a smart plan",
                    description: "Before you sow your seeds, make an elaborate plan of how much time and energy you are going to put into farming. And also consider if the result is worth your efforts. If you are not well-informed, then take courses, learn from those who are already successful in growing their crops."
                },
                {
                    title: "Adapt multi-cropping approach",
                    description: "Many people don’t know that planting the same type of crop in every season makes the land infertile. On the other hand, multi-cropping has lots of benefits – the quantity is bigger, profits are better, and more importantly, you can grow something else when one crop is out of season."
                },
                {
                    title: "Get the best and effective equipment",
                    description: "Some may think investing in equipment is not worth it. But, if you choose your farming equipment smartly, you can save both cost and time in the long run. Remember to check for discounts when you purchase the machinery and always try to negotiate."
                },
                {
                    title: "Start small",
                    description: "If you are not an expert in the farming business, then don’t invest all of your capital. Otherwise, you may lose everything. Invest only the right amount and with it, test your skills and your land as well. You can always try something bigger the next time."
                },
                {
                    title: "Target your audience",
                    description: "Suppose, you planted successfully, harvested, and now, you have a storeroom full of crops. But what if there is no buyer? What if there is no demand for the particular crop at the time? Surely, all of your efforts will be in vain. However, you can avoid it if you target your audience carefully and plant according to that."
                },
                {
                    title: "Always keep a backup",
                    description: "No matter what you do, farming still remains helpless to the unpredictable nature. All of your efforts and money can go to ruin in a single storm or a sweeping flood. Therefore, it is wise to prepare yourself for such adversaries, and take proper actions following such disasters."
                },
                {
                    title: "Utilize the technologies",
                    description: "Things have changed for the farmers and their lands due to the unstable population growth in the last few decades. To meet the demands of such a large population, farmers cannot only use the old methods of farming. They need to collaborate with new technologies in order to feed the humongous amount of people."
                },
                {
                    title: "Research thoroughly",
                    description: "No matter what you are planting, always research the market of the crop. Find out how much demand the crop has in the current time, and how much demand it will have in the harvesting season."
                }
            ]
        },
        userList: {
            heading: {
                farmer: "List of Farmers",
                buyer: "List of Buyers"
            },
            table: ["ID", "Name", "Address", "Email", "Mobile", "Delete"]
        },
        complainList: {
            heading: 'List of Complains',
            table: ["From", "To", "Reason", "Response", "Note", "Action", "Date"]
        },
        aboutUs: ['About Us', 'What Motivated Us',
            'Our motivation behind creating this website was to make the path for farmers smoother when it comes to supporting themselves financially. As Bangladesh is agricultural land, and the farmers are the heroes in the shadows, we must cut a path to give them their due credits.',
            'Who We Are', 'We are a small team containing three members. We decided to build a website where the farmers and the buyer can deal directly. This website aims to clear the obstacles between the farmer and the buyer to make farming a well-loved occupation.',
            'What We Do', 'We create a direct bond between the farmer and the buyer by removing the middleman issue.', 'Our system streamlines the farming business by making everything transparent and easy.',
            'We help our farmers become solvent by bringing them to the center of the trade.', 'Our website keeps the farmers and the buyers updated about the latest farming technologies and science.'
        ],
        training: {
            heading: 'Modern Technologies',
            description: "The state of agriculture in Bangladesh has come a long way in the few decades since its birth. Modern technologies have much to be credited for the changes, although Bangladesh is still lagging when it comes to fusing technology and agriculture. But still, there have been significant improvements in Bangladesh farming due to the arrival of a few modern assistants.",
            technologies: [
                {
                    title: "Root vegetables washing machine",
                    img: trainig1,
                    description: "For our farmers, farming doesn’t stop at growing crops. To make the crops and vegetables look presentable, they must do lots of washing and grooming. Fortunately, the root vegetable washing machine is one of the wonders of technology that have made crucial processes like this simpler. The population of Bangladesh has grown largely in the past few decades, and so has the growth of vegetables. Growing vegetables in huge quantities is already a daunting task for the farmers, on top of that, the processing session can use up more valuable time and cost them seriously. The automaton can wash 1000kg root vegetables in merely one hour, and the cost is very insignificant – only 30paisa per kilogram."
                },
                {
                    title: "The Greenhouse Gardening",
                    img: trainig2,
                    description: "A greenhouse reduces the rate at which thermal energy flows out of its structure, and it does this by impeding heat that has been absorbed from leaving its confines through convection. The material for greenhouse construction is typically glass or plastic so that sunlight can pass through it. This sunlight is integral to the greenhouse becoming warm, since it heats up the ground inside the greenhouse. In turn, the warm ground then warms up the air in the greenhouse, which keeps on heating the plants inside since it is confined within the structure of the greenhouse. The purpose of a greenhouse is to shield crops from excess cold or heat and unwanted pests. A greenhouse makes it possible to grow certain types of crops year round, and fruits, tobacco plants, vegetables, and flowers are what a greenhouse most commonly grows."
                },
                {
                    title: "Soil and Water Sensors",
                    img: trainig3,
                    description: "Perhaps the equipment having the most immediate effect are soil and water sensors. These sensors are durable, unobtrusive and relatively inexpensive. Even family farms are finding it affordable to distribute them throughout their land, and they provide numerous benefits. For instance, these sensors can detect moisture and nitrogen levels, and the farm can use this information to determine when to water and fertilize rather than rely on a predetermined schedule. That results in more efficient use of resources and therefore lowered costs, but it also helps the farm be more environmentally friendly by conserving water, limiting erosion and reducing fertilizer levels in local rivers and lakes."
                },
                {
                    title: "Tillage Equipment",
                    img: trainig4,
                    description: "Tilling is the process of managing soil and preparing it for farming. Traditional Tilling methods have been followed from the ancient times when human first started farming, only the equipment changed from time to time. Most common tillage equipment used in agriculture is the mould-board plough, tractor cultivator, disc harrow, rotavator etc. What will tillage accomplish? The most common reasons for tillage are to break up soil compaction, to provide for the next crop in the rotation sequence (e.g., limited tillage in heavy corn residue or leveling a field for seeding a cover crop), to control emerged weeds, and to redistribute crop residue. What is risked by turning over or disturbing residue? Crop rotation, topography, soil type, and weather conditions are all critical. Leaving less than 30 percent crop residue remaining on the soil surface after planting makes most Iowa soils vulnerable to erosion."
                }
            ]
        }
    },
    bn: {
        submitBtn: "জমা দিন",
        header: {
            authBtn: ['কৃষক লগ ইন', 'ক্রেতা লগ ইন', 'নিবন্ধন করুন', 'অ্যাডমিন'],
            lang: "ভাষা",
            menu: {
                general: ['হোম', 'আমাদের সম্পর্কে', 'প্রশিক্ষণ'],
                admin: ["ড্যাশবোর্ড", "কৃষকের তালিকা", "ক্রেতার তালিকা", "অভিযোগ তালিকা", "প্রোফাইল", "ফসলের বিজ্ঞাপন", "লগআউট"],
                farmer: ["প্রোফাইল", "অভিযোগ", "ফসলের বিজ্ঞাপন", "চাষের টিপস", "লগআউট"],
                buyer: ["প্রোফাইল", "বিজ্ঞাপন পোস্ট করুন", "আমার বিজ্ঞাপন", "লগআউট"]
            }
        },
        login: {
            heading: {
                admin: "অ্যাডমিন লগ ইন",
                farmer: "কৃষক লগ ইন",
                buyer: "ক্রেতা লগ ইন"
            },
            form: ["মোবাইল", "পাসওয়ার্ড"]
        },
        signup: {
            heading: {
                farmer: "কৃষক নিবন্ধন",
                buyer: "ক্রেতা নিবন্ধন"
            },
            form: ["নাম", "মোবাইল", "ইমেল", "ঠিকানা", "পাসওয়ার্ড"]
        },
        myProfile: {
            heading: 'জীবন বৃত্তান্ত সম্পাদনা',
            form: ["নাম", "মোবাইল", "ইমেল", "ঠিকানা"]
        },
        complain: {
            heading: 'অভিযোগ স্ট্যাটাস বিস্তারিত',
            table: ["অভিযোগ", "প্রতিক্রিয়া", "প্রোফাইল দেখুন"]
        },
        cropAdvertise: {
            heading: 'ফসলের বিজ্ঞাপনের বিস্তারিত',
            table: ["কর্ম", "শস্যের নাম", "ফসলের ছবি", "প্রয়োজনীয় পরিমাণ(কেজি)", "ক্রেতার তথ্য", "আমার প্রতিক্রিয়া"]
        },
        myResponse: {
            heading: 'আমার প্রতিক্রিয়া',
            table: ["উপলভ্য পরিমাণ", "মূল্য", "তারিখ", "প্রদানের স্থিতি"]
        },
        postAdvertise: {
            heading: "আপনার প্রয়োজনীয় ফসল পোস্ট করুন",
            form: ["ফসলের নাম", "ক্রপ ইমেজ", "অবস্থান", "প্রয়োজনীয় পরিমাণ(কেজি)"]
        },
        myAdvertise: {
            heading: 'আমার বিজ্ঞাপন',
            table: ["ফসলের নাম", "ক্রপ ইমেজ", "প্রয়োজনীয় পরিমাণ(কেজি)", "স্থিতি", "প্রতিক্রিয়া"]
        },
        receivedCrop: {
            heading: 'গৃহীত ফসল বিস্তারিত',
            table: ["পেমেন্ট করুন", "কৃষকের বিবরণ", "তারিখ", "উপলভ্য পরিমাণ", "মূল্য(টাকা)", "লেনদেনের অবস্থা"]
        },
        advertiseApprove: {
            heading: 'ফসলের বিজ্ঞাপন',
            table: ["ফসলের নাম", "ফসলের ছবি", "প্রয়োজনীয় পরিমাণ(কেজি)", "ক্রেতার তথ্য", "স্থিতি", "ক্রিয়া", "বিক্রয় ইতিহাস"]
        },
        sell: {
            heading: 'ফসল বিক্রি করুন',
            form: ["পরিমাণ", "মূল্য"]
        },
        invoice: {
            heading: 'চালান',
            list: ["মূল্য(টাকা)", "গ্রো ফার্ম কমিশন(টাকা)", "মোট(টাকা)"],
            btn: "এখন পরিশোধ করুন"
        },
        farmingTips: {
            heading: 'চাষের টিপস',
            description: "খামার করা এমন একটি পেশা যেখানে কঠোর পরিশ্রম ছাড়া সফল হওয়ার কোনো উপায় নেই। তবে, কিছু সহজ কিন্তু খুব পরিচিত নয় এমন টিপস যা আপনি ভেবেছিলেন তার চেয়ে তাড়াতাড়ি আপনি চাষে সফল হবেন।",
            tips: [
                {
                    title: 'আপনার মাটির জন্য সেরা ফসল জেনে রাখুন',
                    description: 'আপনার জমি সম্পর্কে গভীর জ্ঞান থাকলে আপনি আপনার সময় এবং জমিটি লাভজনকভাবে ব্যবহার করতে পারেন। মাটির প্রকারগুলি আপনার অঞ্চলের ভূগোলের উপর নির্ভর করে। সমস্ত ফসল একই ধরণের মাটিতে জন্মায় না। এটি জেনেও, আপনার জমির জন্য কী ধরণের ফসল সবচেয়ে উপকারী তা জেনে নিন।'
                },
                {
                    title: 'একটি স্মার্ট পরিকল্পনা',
                    description: 'আপনি আপনার বীজ বপন করার আগে আপনি কৃষিতে কতটা সময় এবং শক্তি যোগাতে চলেছেন তার একটি বিস্তৃত পরিকল্পনা করুন। ফলাফলটি আপনার প্রচেষ্টার পক্ষে কার্যকর কিনা তাও বিবেচনা করুন। যদি আপনি ভালভাবে অবহিত না হন তবে কোর্সগুলি নিন, তাদের কাছ থেকে শিখুন যারা ইতিমধ্যে তাদের ফসল বাড়ানোর ক্ষেত্রে সফল।'
                },
                {
                    title: 'বহু-ক্রপিং পদ্ধতি ',
                    description: 'অনেক লোকই জানেন না যে প্রতি মৌসুমে একই ধরণের ফসল রোপণ করা জমিকে অনুর্বর করে তোলে। অন্যদিকে, বহু-ক্রপিংয়ের প্রচুর সুবিধা রয়েছে - পরিমাণটি বড়, মুনাফা আরও ভাল এবং আরও গুরুত্বপূর্ণ, যখন একটি ফসল মৌসুমের বাইরে চলে যায় তখন আপনি অন্য কিছু বাড়তে পারেন।'
                },
                {
                    title: 'সেরা এবং কার্যকর সরঞ্জাম',
                    description: 'কেউ কেউ মনে করতে পারে যে সরঞ্জামগুলিতে বিনিয়োগ করা উপযুক্ত নয়। তবে, যদি আপনি আপনার কৃষিকাজের সরঞ্জামগুলি স্মার্টভাবে চয়ন করেন তবে আপনি দীর্ঘমেয়াদে খরচ এবং সময় উভয়ই সাশ্রয় করতে পারবেন। আপনি যখন যন্ত্রপাতিটি কিনে থাকেন এবং ছাড়ের জন্য সর্বদা আলোচনা করার জন্য মনে রাখবেন।'
                },
                {
                    title: 'ছোট শুরু করুন',
                    description: 'আপনি যদি কৃষিকাজের বিশেষজ্ঞ না হন তবে আপনার সমস্ত মূলধন বিনিয়োগ করবেন না। অন্যথায়, আপনি সবকিছু হারাতে পারেন। কেবলমাত্র সঠিক পরিমাণে বিনিয়োগ করুন এবং এটির সাথে, আপনার দক্ষতা এবং আপনার জমিও পরীক্ষা করুন। আপনি পরের বার সর্বদা আরও বড় কিছু চেষ্টা করতে পারেন।'
                },
                {
                    title: 'আপনার দর্শকদের লক্ষ্য করুন',
                    description: 'মনে করুন, আপনি সফলভাবে রোপণ করেছেন, ফসল কাটা করেছেন এবং এখন আপনার কাছে ফসলে ভরা স্টোররুম রয়েছে। তবে ক্রেতা না থাকলে কী হবে? সেই সময়ে যদি নির্দিষ্ট ফসলের চাহিদা না থাকে তবে কী হবে? অবশ্যই, আপনার সমস্ত প্রচেষ্টা নিরর্থক হবে। তবে আপনি যদি শ্রোতাদের সাবধানে লক্ষ্যবস্তু করেন এবং সে অনুসারে গাছ লাগান তবে আপনি সঙ্কট এড়াতে পারবেন।'
                },
                {
                    title: 'সর্বদা একটি ব্যাকআপ রাখুন',
                    description: 'আপনি যা-ই করেন না কেন, কৃষিকাজ এখনও অনির্দেশ্য প্রকৃতির কাছে অসহায় থাকে। আপনার সমস্ত প্রচেষ্টা এবং অর্থ একক ঝড় বা একটি ঝরঝরে বন্যায় ধ্বংস হতে পারে। সুতরাং, এই জাতীয় বিরোধীদের জন্য নিজেকে প্রস্তুত করা এবং এই জাতীয় বিপর্যয়ের পরে যথাযথ পদক্ষেপ নেওয়া বুদ্ধিমানের কাজ।'
                },
                {
                    title: 'প্রযুক্তি ব্যবহার',
                    description: 'গত কয়েক দশক ধরে অস্থিতিশীল জনসংখ্যা বৃদ্ধির কারণে কৃষক এবং তাদের জমির জন্য জিনিসগুলি পরিবর্তিত হয়েছে। এত বড় জনগোষ্ঠীর চাহিদা মেটাতে কৃষকরা কেবলমাত্র কৃষিকাজের পুরানো পদ্ধতিগুলিই ব্যবহার করতে পারবেন না। বিপুল পরিমাণ লোককে খাওয়ানোর জন্য তাদের নতুন প্রযুক্তির সাথে সহযোগিতা করা দরকার।'
                },
                {
                    title: 'পুঙ্খানুপুঙ্খভাবে গবেষণা',
                    description: 'আপনি যা রোপণ করেন না কেন, সর্বদা ফসলের বাজার নিয়ে গবেষণা করুন। বর্তমান সময়ে ফসলের চাহিদা কত এবং ফসল কাটার মৌসুমে কতটা চাহিদা থাকবে তা জেনে নিন।'
                }
            ]
        },
        userList: {
            heading: {
                farmer: "কৃষকদের তালিকা",
                buyer: "ক্রেতাদের তালিকা"
            },
            table: ["আইডি", "নাম", "ঠিকানা", "ইমেল", "মোবাইল", "মুছুন"]
        },
        complainList: {
            heading: 'List of Complains',
            table: ["থেকে", "প্রতি", "কারণ", "প্রতিক্রিয়া", "দ্রষ্টব্য", "ক্রিয়া", "তারিখ"]
        },
        aboutUs: ['আমাদের সম্পর্কে', 'আমাদের প্রেরণা',
            'এই ওয়েবসাইটটি তৈরি করার পেছনে আমাদের অনুপ্রেরণা ছিল কৃষকদের যখন আর্থিকভাবে তাদের সমর্থন করার বিষয়টি আসে তখন তারা মসৃণ করে তোলে। বাংলাদেশ যেহেতু কৃষিজমি, এবং কৃষকরা ছায়ায় নায়ক, তাদের অবশ্যই তাদের যথাযথ ক্রেডিট দেওয়ার জন্য আমাদের অবশ্যই একটি পথ কাটাতে হবে।',
            'আমরা কারা', 'আমরা তিনটি সদস্য সমন্বিত একটি ছোট দল। আমরা এমন একটি ওয়েবসাইট তৈরি করার সিদ্ধান্ত নিয়েছি যেখানে কৃষক এবং ক্রেতা সরাসরি ডিল করতে পারে। এই ওয়েবসাইটটির লক্ষ্য কৃষক এবং ক্রেতার মধ্যকার বাধাগুলি মুছে ফেলা কৃষিকাজকে একটি ভাল পেশা বানানোর জন্য।',
            'আমরা কি করি', 'আমরা মধ্যস্থতার বিষয়টি সরিয়ে কৃষক এবং ক্রেতার মধ্যে প্রত্যক্ষ বন্ধন তৈরি করি।',
            'আমাদের সিস্টেম সবকিছুকে স্বচ্ছ এবং সহজ করে কৃষিকাজের ব্যবসায়ের প্রবণতা করে।', 'আমরা আমাদের কৃষকদের ব্যবসায়ের কেন্দ্রে এনে দ্রাবক হয়ে উঠতে সহায়তা করি।', 'আমাদের ওয়েবসাইট কৃষকদের এবং ক্রেতাদের সর্বশেষ কৃষিক্ষেত্র প্রযুক্তি এবং বিজ্ঞান সম্পর্কে আপডেট রাখে।'
        ],
        training: {
            heading: 'আধুনিক প্রযুক্তি',
            description: 'জন্মের পর থেকে কয়েক দশকে বাংলাদেশের কৃষিক্ষেত্র দীর্ঘ পথ পাড়ি দিয়েছে। আধুনিক প্রযুক্তিগুলির পরিবর্তনের জন্য অনেক বেশি কৃতিত্ব রয়েছে, যদিও প্রযুক্তি এবং কৃষিক্ষেত্রের ক্ষেত্রে বাংলাদেশ এখনও পিছিয়ে রয়েছে। তবে এখনও কয়েকটি আধুনিক সহকারী আসার কারণে বাংলাদেশ কৃষিক্ষেত্রে উল্লেখযোগ্য উন্নতি হয়েছে।',
            technologies: [
                {
                    title: 'রুট সবজি ওয়াশিং মেশিন',
                    img: trainig1,
                    description: 'আমাদের কৃষকদের জন্য, কৃষকরা ফসলের বৃদ্ধি বন্ধ করে না। শস্য এবং শাকসব্জি উপস্থাপনীয় দেখতে তাদের অবশ্যই প্রচুর ধোয়া এবং গ্রুমিং করতে হবে। ভাগ্যক্রমে, রুট উদ্ভিজ্জ ওয়াশিং মেশিন প্রযুক্তিটির অন্যতম এক বিস্ময় যা এই সহজরূপে গুরুত্বপূর্ণ প্রক্রিয়া তৈরি করেছে। বাংলাদেশের জনসংখ্যা বিগত কয়েক দশকে বড় আকারে বেড়েছে এবং শাক-সবজির বৃদ্ধিও তাই বেড়েছে। বিপুল পরিমাণে শাক-সব্জির চাষ ইতিমধ্যে কৃষকদের জন্য একটি দুরূহ কাজ, তারপরে, প্রক্রিয়াজাতকরণ অধিবেশন আরও মূল্যবান সময় ব্যবহার করতে পারে এবং তাদের গুরুত্ব সহকারে ব্যয় করতে পারে। অটোম্যাটনটি কেবল এক ঘন্টার মধ্যে 1000 কেজি মূলের শাকসব্জি ধুতে পারে, এবং ব্যয়টি খুব তুচ্ছ - কেজি প্রতি 30 পয়সা।'
                },
                {
                    title: 'গ্রীনহাউস বাগান',
                    img: trainig2,
                    description: 'একটি গ্রিনহাউস তাপীয় শক্তি তার কাঠামোর বাইরে প্রবাহিত হওয়ার হারকে হ্রাস করে এবং এটি তাপকে বাধাগ্রস্ত করে যা সংবাহনের মাধ্যমে তার সীমাবদ্ধতা ছেড়ে যাওয়ার ফলে শোষিত হয়। গ্রিনহাউস নির্মাণের জন্য উপাদানগুলি সাধারণত গ্লাস বা প্লাস্টিকের হয় যাতে সূর্যের আলো এটির মধ্য দিয়ে যেতে পারে। গ্রিনহাউসটি উষ্ণ হওয়ার জন্য এই সূর্যের আলো অবিচ্ছেদ্য, যেহেতু এটি গ্রিনহাউসের অভ্যন্তরে জমিকে উত্তাপ দেয়। ফলস্বরূপ, উষ্ণ স্থলটি গ্রিনহাউসে বাতাসকে উষ্ণ করে তোলে, যা গ্রিনহাউসের কাঠামোর মধ্যে সীমাবদ্ধ থাকায় গাছগুলি ভিতরে গরম করে রাখে। গ্রিনহাউসের উদ্দেশ্য হল শীত বা তাপ এবং অযাচিত কীটপতঙ্গ থেকে শস্যকে রক্ষা করা। গ্রিনহাউস বছরের পর বছর নির্দিষ্ট ধরণের ফসলের বৃদ্ধি সম্ভব করে তোলে এবং ফলমূল, তামাক গাছ, শাকসবজি এবং ফুল যা গ্রিনহাউস সবচেয়ে বেশি বৃদ্ধি পায়।'
                },
                {
                    title: 'মাটি এবং জল সেন্সর',
                    img: trainig3,
                    description: 'সম্ভবত সর্বাধিক তাত্ক্ষণিক প্রভাবযুক্ত সরঞ্জামগুলি হল মাটি এবং জলের সেন্সর। এই সেন্সরগুলি টেকসই, আপত্তিজনক এবং তুলনামূলকভাবে সস্তা in এমনকি পারিবারিক খামারগুলি তাদের পুরো জমি জুড়ে এগুলি বিতরণ করা সাশ্রয়ী মূল্যের সন্ধান করছে এবং তারা অসংখ্য সুবিধা প্রদান করে। উদাহরণস্বরূপ, এই সেন্সরগুলি আর্দ্রতা এবং নাইট্রোজেনের স্তরগুলি সনাক্ত করতে পারে এবং ফার্ম কোন পূর্ব নির্ধারিত সময়সূচির উপর নির্ভর না করে কখন জল এবং সার প্রয়োগ করে তা নির্ধারণ করতে এই তথ্য ব্যবহার করতে পারে। এর ফলে সম্পদের আরও কার্যকর ব্যবহার এবং এর ফলে ব্যয় হ্রাসের ফলস্বরূপ, তবে এটি জল সংরক্ষণ, ক্ষয়কে সীমাবদ্ধ করে এবং স্থানীয় নদী ও হ্রদে সারের মাত্রা হ্রাস করে খামারটিকে আরও পরিবেশ বান্ধব হতে সহায়তা করে।'
                },
                {
                    title: 'কৃষিক্ষেত্র সরঞ্জাম',
                    img: trainig4,
                    description: 'টিলিং হল মাটি পরিচালনা এবং এটি কৃষিকাজের জন্য প্রস্তুত করার প্রক্রিয়া। প্রাচীন কাল থেকেই humanতিহ্যবাহী ট্রিলিং পদ্ধতি অনুসরণ করা হয় যখন মানুষ প্রথম কৃষিকাজ শুরু করেছিল, কেবল সময়ে সময়ে যন্ত্রপাতি পরিবর্তিত হয়েছিল। কৃষিতে ব্যবহৃত সর্বাধিক প্রচলিত সরঞ্জাম হল ছাঁচ-বোর্ড লাঙল, ট্রাক্টর চাষাবাদক, ডিস্ক হ্যারো, রোটাভেটর ইত্যাদি। টিলা কী কী কাজ সম্পাদন করবে? কৃষিক্ষেত্রের সর্বাধিক সাধারণ কারণ হল মাটির সংযোগ বিচ্ছিন্নকরণ, ঘূর্ণন ক্রমের পরবর্তী ফসলের জন্য সরবরাহ করা (উদাহরণস্বরূপ, ভারী কর্নের অবশিষ্টাংশগুলিতে সীমাবদ্ধ জমিতে বা একটি আবরণ শস্য বপনার জন্য ক্ষেত্র সমতলকরণ), উদ্ভূত আগাছা নিয়ন্ত্রণ করা, এবং ফসলের অবশিষ্টাংশ পুনরায় বিতরণ করুন। কীসের ঝুঁকির ফলে অবশিষ্টাংশকে ঘুরিয়ে দেওয়া বা বিরক্ত করা যায়? শস্য ঘোরানো, টোগোগ্রাফি, মাটির ধরণ এবং আবহাওয়া পরিস্থিতি সবই সমালোচনামূলক। রোপণের পরে মাটির পৃষ্ঠের 30 শতাংশেরও কম ফসলের অবশিষ্টাংশ ফেলে রাখা বেশিরভাগ আইওয়া জমিটিকে ক্ষয়ের ঝুঁকিতে ফেলেছে।'
                }
            ]
        }
    }
}
export default language;