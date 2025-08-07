document.addEventListener('DOMContentLoaded', () => {

    const topSection = document.getElementById('topSection');
    const middleSection = document.getElementById('middleSection');
    const bottomSection = document.getElementById('bottomSection');


    const navStory = document.getElementById('navStory');
    const navArcade = document.getElementById('navArcade');
    const storyPage = document.getElementById('storyPage');
    const arcadePage = document.getElementById('arcadePage');


    const topContent = `
        <div class="flex flex-col md:flex-row items-center gap-6">
            <img src="IMG_2273.jpg" alt= class="rounded-lg shadow-md w-full h-auto max-w-sm">
            <p class="text-xl leading-relaxed text-gray-800 mt-4 md:mt-0">
                My name is Leo and here's a quick picture of me and I may look not so serious because I had finished taking an AP exam and was too tired too focused on the picture.
            </p>
        </div>
    `;

    const middleContent = `
        <p class="text-xl leading-relaxed text-gray-800">
            I have loved playing video games for a long time and wonder if it's possible that I could create one. When I joined my elementary schools robotic team I found my passion for coding and building but once covid hit, I had seemed to forget about it until high school.
        </p>
    `;

    const bottomContent = `
        <p class="text-xl leading-relaxed text-gray-100">
            When I got to high school, I started to realize what coding actually was and made me think I wasn't ready yet to join the robotics team. That's why I joined KKCF to understand more on coding but as well as technology and I'll probably join the robotics team during my junior year. This leads me closer to my major too.
        </p>
    `;

    const populateStoryPage = () => {
        topSection.innerHTML = topContent;
        middleSection.innerHTML = middleContent;
        bottomSection.innerHTML = bottomContent;
    };

   
    const navigateTo = (page) => {
        if (page === 'story') {
            storyPage.classList.remove('hidden');
            arcadePage.classList.add('hidden');
        } else if (page === 'arcade') {
            storyPage.classList.add('hidden');
            arcadePage.classList.remove('hidden');
        }
    };

  
    navStory.addEventListener('click', (e) => {
        e.preventDefault(); 
        navigateTo('story');
    });

    navArcade.addEventListener('click', (e) => {
        e.preventDefault(); 
        navigateTo('arcade');
    });

    populateStoryPage();
    navigateTo('story'); 
});
