document.addEventListener('DOMContentLoaded', function() {
    // Initialize all containers
    const containers = document.querySelectorAll('.container');
    
    containers.forEach((container, index) => {
        // Set staggered animation delays
        container.style.transitionDelay = `${index * 0.1}s`;
        
        // Get elements
        const poster = container.querySelector('.poster');
        const img = container.querySelector('img');
        const details = container.querySelector('.details');
        const title = container.querySelector('h2');
        const text = container.querySelector('p');
        const button = container.querySelector('.read-more');
        
        // Click effect
        container.addEventListener('click', function(e) {
            // Don't trigger if clicking on the button
            if (e.target.classList.contains('read-more')) return;
            
            this.style.transform = 'translateY(-10px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px)';
            }, 200);
            
            console.log(`Selected: ${title.textContent}`);
        });
        
        // Mobile touch support
        container.addEventListener('touchstart', function() {
            this.classList.add('active');
            // Trigger hover effects
            img.style.transform = 'scale(1.08)';
            img.style.filter = 'brightness(0.8) blur(1px)';
            details.style.bottom = '0';
            title.style.transform = 'translateY(0)';
            title.style.opacity = '1';
            text.style.transform = 'translateY(0)';
            text.style.opacity = '1';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        });
        
        container.addEventListener('touchend', function() {
            this.classList.remove('active');
            // Revert hover effects after delay
            setTimeout(() => {
                if (!this.classList.contains('active')) {
                    img.style.transform = '';
                    img.style.filter = '';
                    details.style.bottom = '';
                    title.style.transform = '';
                    title.style.opacity = '';
                    text.style.transform = '';
                    text.style.opacity = '';
                    button.style.opacity = '';
                    button.style.transform = '';
                }
            }, 1000);
        });
        
        // Button hover effect
        button.addEventListener('mouseenter', function() {
            this.innerHTML = `→ ${this.textContent.trim()}`;
            this.style.background = '#fff';
        });
        
        button.addEventListener('mouseleave', function() {
            this.innerHTML = this.textContent.replace('→ ', '');
            this.style.background = 'rgba(255,255,255,0.9)';
        });
        
        // Button click action
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            alert(`You selected: ${title.textContent}\nThis would navigate to the detailed page.`);
        });
    });
    
    // Optional: Parallax effect on mouse move
    window.addEventListener('mousemove', function(e) {
        const xPos = e.clientX / window.innerWidth;
        const yPos = e.clientY / window.innerHeight;
        
        containers.forEach((container, i) => {
            container.style.transform = `
                translateY(-15px)
                translateX(${(xPos - 0.5) * 10 * (i % 2 ? -1 : 1)}px)
                translateY(${(yPos - 0.5) * 10}px)
            `;
        });
    });
});