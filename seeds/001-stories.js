
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        { name: 'Zahida', 
          title: 'Returning home to Syria', 
          isapproved: true, 
          story: "The destruction was indescribable, and at first I didn't recognize my town. When I saw it, it was one of the saddest moments in my life. There was no water, no electricity. We felt that we were in the stone age. But little by little, we made things better." }
        {name: 'Sana', title: 'Sana and Her Sisters Had to Leave Syria', isapproved: false, story: "Sana* is three years old and fled Syria with her mother and three sisters. An increasingly brutal civil war is tearing Syria apart. One million people have now fled Syria and are sheltering in neighboring countries. Sana's 12 year old sister Yasmine* describes the reason the family left..."}
        {name: 'Anonymous', title: "Yaser's Story", isapproved: true, story: "For two long years Yaser's* five children, Ali*, 15, Achmed*, 14, Hala*, 10, Sedra*, 7 and Aya*, 3, have not been able to go to school or play outside. Violence kept them from living a normal life. There was constant fear of sniper and missile attacks. They learned what type of weapon was being used just by the sound it made."}
        {name: 'Walaa', title: "One Sad Dark Night", isapproved: false, story: "One sad dark night, a night without a moon, I was with my family at my home in Syria and we were preparing a dinner to have a nice meal together. Suddenly the power goes off and darkness prevails, a moment later the sky lights up, but not by the moon but from an explosion."}
        {name: 'Moo Chan', title: 'My Story', isapproved: false, story: 'One day he was in China doing business when he was arrested. He was repatriated and sat in prison for two months before being released. It was then that he truly realized that life was hopeless in North Korea and started to think about joining his resettled family members and good friends in the South. He wanted to be with them more than anything, so he escaped.'},
        { name: 'Alaa', 
          title: 'Fun Bus in Beirut', 
          isapproved: true, 
          story: "When my dad passed away, I had to work to support my mother and siblings. I wish I could go back to school, but now I have no choice. But here on the Fun Bus, I play, draw and learn. I can't wait to be back on the bus next week."}
        { name: 'Ali Abdi', 
          title: '20 years later', 
          isapproved: true, 
          story: "Sometimes I forget I am a refugee. I only remember when I see my card or when someone calls me a refugee. I fled Somalia 20 years later and when I got to Rwanda, I stopped running. When I came here, I didn't know the language. I met my wife and we have helped each other. She is from this country, so she has taught me a lot and now I am self-reliant."}
          {name: 'Yoon Ha', title: 'My Story', isapproved: true, story: 'In North Korea, the police oppressed me, keeping me from doing what I needed to do to survive. And in China, the police were trying to find North Korean refugees who were living in hiding. They wanted to send us back to North Korea, even though they knew we would be brutally punished by the regime. Whenever the police came around, I locked all the doors and hid in fear until they left town. So at first, I was scared of the police in South Korea.'}
          {name: 'Salim', title: "Surviving the Winter", isapproved: false, story: "The cold days are long, but the nights are always longer for Salim. When the sun goes down, the temperature drops, and she can feel the freezing air against her cheeks. She shivers to keep her body warm but with no blanket she has nothing to protect her from the cold air breezing through the tent. She is one of many children fighting to survive the winter in a refugee camp, and as the conditions turn treacherous, she is in desperate need of warm clothes, blankets and food."}
          {name: 'Farah', title: "Farah and Adnan's Story", isapproved: true, story: "Farah* and Adnan* led a comfortable, successful life in Syria. They had a large house overlooking the city where they lived with their two children, Fathi*, 3, and Zeinah*, 1. Farah was hoping to return to school to continue her education, which she put on hold after having her first child, and Adnan, an Arabic teacher, was pursuing a law degree. Their large, tight-knit family – Adnan has 8 sisters and 5 brothers and Farah has a large family as well – all lived nearby."}
          {name: 'Siwar', title: "Motherhood in a Syrian Refugee Camp", isapproved: false, story: "I have been in Za’atari for a year and a half with my husband and our five children. The youngest is 8 months old and was born in the camp. We left Syria because our village was under heavy shelling. Before the war, we lived a normal life in Syria. My kids used to play with friends and work with their uncle. They want to go back to their country where they grew up."}
          
        ]);

    });
};
