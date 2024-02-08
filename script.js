const db = {
    
        the: { chunks: ['th', 'e'], phones: ['DH', 'AH'] },
        of: { chunks: ['o', 'f'], phones: ['AH', 'V'] },
        and: { chunks: ['a', 'n', 'd'], phones: ['AH', 'N', 'D'] },
        to: { chunks: ['t', 'o'], phones: ['T', 'UW'] },
        a: { chunks: ['a'], phones: ['AH'] },
        in: { chunks: ['i', 'n'], phones: ['IH', 'N'] },
        for: { chunks: ['f', 'o', 'r'], phones: ['F', 'AO', 'R'] },
        is: { chunks: ['i', 's'], phones: ['IH', 'Z'] },
        on: { chunks: ['o', 'n'], phones: ['AA', 'N'] },
        that: { chunks: ['th', 'a', 't'], phones: ['DH', 'AE', 'T'] },
        by: { chunks: ['b', 'y'], phones: ['B', 'AY'] },
        this: { chunks: ['th', 'i', 's'], phones: ['DH', 'IH', 'S'] },
        with: { chunks: ['w', 'i', 'th'], phones: ['W', 'IH', 'DH'] },
        i: { chunks: ['i'], phones: ['AY'] },
        you: { chunks: ['y', 'ou'], phones: ['Y', 'UW'] },
        it: { chunks: ['i', 't'], phones: ['IH', 'T'] },
        not: { chunks: ['n', 'o', 't'], phones: ['N', 'AA', 'T'] },
        or: { chunks: ['o', 'r'], phones: ['AO', 'R'] },
        be: { chunks: ['b', 'e'], phones: ['B', 'IY'] },
        are: { chunks: ['a', 're'], phones: ['AA', 'R'] },
        from: { chunks: ['f', 'r', 'o', 'm'], phones: ['F', 'R', 'AH', 'M'] },
        at: { chunks: ['a', 't'], phones: ['AE', 'T'] },
        as: { chunks: ['a', 's'], phones: ['AE', 'Z'] },
        your: { chunks: ['y', 'ou', 'r'], phones: ['Y', 'AO', 'R'] },
        all: { chunks: ['a', 'll'], phones: ['AO', 'L'] },
        have: { chunks: ['h', 'a', 've'], phones: ['HH', 'AE', 'V'] },
        new: { chunks: ['n', 'ew'], phones: ['N', 'UW'] },
        more: { chunks: ['m', 'o', 're'], phones: ['M', 'AO', 'R'] },
        an: { chunks: ['a', 'n'], phones: ['AE', 'N'] },
        was: { chunks: ['w', 'a', 's'], phones: ['W', 'AA', 'Z'] },
        we: { chunks: ['w', 'e'], phones: ['W', 'IY'] },
        // New words added below
        hello: { chunks: ['h', 'e', 'll', 'o'], phones: ['HH', 'AH', 'L', 'OW'] },
        goodbye: { chunks: ['g', 'oo', 'd', 'b', 'y', 'e'], phones: ['G', 'UH', 'D', 'B', 'AY'] },
        happy: { chunks: ['h', 'a', 'p', 'py'], phones: ['HH', 'AE', 'P', 'IY'] },
        sad: { chunks: ['s', 'a', 'd'], phones: ['S', 'AE', 'D'] },
        love: { chunks: ['l', 'o', 'v', 'e'], phones: ['L', 'AH', 'V'] },
        hate: { chunks: ['h', 'a', 't', 'e'], phones: ['HH', 'EY', 'T'] },
        beautiful: { chunks: ['b', 'ea', 'u', 'ti', 'f', 'ul'], phones: ['B', 'Y', 'UW', 'T', 'AH', 'F', 'AH', 'L'] },
        ugly: { chunks: ['u', 'g', 'ly'], phones: ['AH', 'G', 'L', 'IY'] },
        big: { chunks: ['b', 'i', 'g'], phones: ['B', 'IH', 'G'] },
        small: { chunks: ['s', 'm', 'a', 'll'], phones: ['S', 'M', 'AO', 'L'] },
        fast: { chunks: ['f', 'a', 's', 't'], phones: ['F', 'AE', 'S', 'T'] },
        slow: { chunks: ['s', 'l', 'ow'], phones: ['S', 'L', 'OW'] },
        cat: { chunks: ['c', 'a', 't'], phones: ['K', 'AE', 'T'] },
        dog: { chunks: ['d', 'o', 'g'], phones: ['D', 'AO', 'G'] },
        bird: { chunks: ['b', 'i', 'r', 'd'], phones: ['B', 'ER', 'D'] },
        fish: { chunks: ['f', 'i', 'sh'], phones: ['F', 'IH', 'SH'] },
        apple: { chunks: ['a', 'p', 'p', 'le'], phones: ['AE', 'P', 'AH', 'L'] },
        banana: { chunks: ['b', 'a', 'n', 'a', 'n', 'a'], phones: ['B', 'AH', 'N', 'AE', 'N', 'AH'] },
        orange: { chunks: ['o', 'r', 'a', 'n', 'ge'], phones: ['AO', 'R', 'AH', 'N', 'JH'] },
        computer: { chunks: ['c', 'o', 'm', 'p', 'u', 't', 'er'], phones: ['K', 'AH', 'M', 'P', 'Y', 'UW', 'T', 'ER'] },
        internet: { chunks: ['i', 'n', 't', 'er', 'n', 'e', 't'], phones: ['IH', 'N', 'T', 'ER', 'N', 'EH', 'T'] },
        programming: { chunks: ['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'ng'], phones: ['P', 'R', 'OW', 'G', 'R', 'AE', 'M', 'IH', 'NG'] },
        language: { chunks: ['l', 'a', 'ng', 'u', 'a', 'ge'], phones: ['L', 'AE', 'NG', 'G', 'W', 'AH', 'JH'] },
        music: { chunks: ['m', 'u', 's', 'i', 'c'], phones: ['M', 'Y', 'UW', 'Z', 'IH', 'K'] },
        book: { chunks: ['b', 'oo', 'k'], phones: ['B', 'UH', 'K'] },
        read: { chunks: ['r', 'ea', 'd'], phones: ['R', 'EH', 'D'] },
        write: { chunks: ['w', 'r', 'i', 'te'], phones: ['R', 'AY', 'T'] },
        learn: { chunks: ['l', 'e', 'a', 'r', 'n'], phones: ['L', 'ER', 'N'] },
        school: { chunks: ['s', 'ch', 'oo', 'l'], phones: ['S', 'K', 'UW', 'L'] },
        student: { chunks: ['s', 't', 'u', 'd', 'e', 'n', 't'], phones: ['S', 'T', 'UW', 'D', 'AH', 'N', 'T'] },
        teacher: { chunks: ['t', 'ea', 'ch', 'er'], phones: ['T', 'IY', 'CH', 'ER'] },
        university: { chunks: ['u', 'n', 'i', 'v', 'er', 's', 'i', 't', 'y'], phones: ['Y', 'UW', 'N', 'AH', 'V', 'ER', 'S', 'AH', 'T', 'IY'] },
      
  };
  
  document.getElementById('goButton').addEventListener('click', function() {
    const wordInput = document.getElementById('wordInput').value.trim().toLowerCase();
    const outputDiv = document.getElementById('output');
    
    if (db[wordInput]) {
      const chunks = db[wordInput].chunks;
      const phonicSounds = db[wordInput].phones;
      outputDiv.innerHTML = '';
      
      for (let i = 0; i < chunks.length; i++) {
        const button = document.createElement('button');
        button.textContent = chunks[i];
        button.className = 'chunkButton';
        button.addEventListener('click', function() {
          playSound(phonicSounds[i]);
        });
        outputDiv.appendChild(button);
      }
    } else {
      alert('This word does not exist in the database.');
    }
  });
  
  function playSound(soundChunk) {
    const soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    const audio = new Audio(soundLink);
    audio.play();
  }
  