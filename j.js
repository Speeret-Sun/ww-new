document.getElementById('vz').addEventListener('click', function() {
    const vidsms = document.getElementById('vidsms');
    
    vidsms.style.display = 'flex'; 
    setTimeout(() => {
        vidsms.style.opacity = 1; 
    }, 10); 
});