const numerals = {
   "IONIAN": [
      "Imaj7", "II-7", "III-7", "IVmaj7", "V7", "VI-7", "VII-7(♭5)"
   ],
   "DORIAN": [
      "I-7", "II-7", "♭IIImaj7", "IV7", "V-7", "VI-7(♭5)", "♭VIImaj7"
   ],
   "PHRYGIAN": [
      "I-7", "♭IImaj7", "♭III7", "IV-7", "V-7(♭5)", "♭VImaj7", "♭VII-7"
   ],
   "LYDIAN": [
      "Imaj7", "II7", "III-7", "♯IV-7(♭5)", "Vmaj7", "VI-7", "VII-7"
   ],
   "MIXOLYDIAN": [
      "I7", "II-7", "III-7(♭5)", "IVmaj7", "V-7", "VI-7", "♭VIImaj7"
   ],
   "AEOLIAN": [
      "I-7", "II-7(♭5)", "♭IIImaj7", "IV-7", "V-7", "♭VImaj7", "♭VII7"
   ],
   "LOCRIAN": [
      "I-7(♭5)", "♭IImaj7", "♭III-7", "IV-7", "♭Vmaj7", "♭VI7", "♭VII-7"
   ]
};

const keys = {
   "C": {
      "IONIAN": [
         "Cmaj7", "D-7", "E-7", "Fmaj7", "G7", "A-7", "B-7(♭5)"
      ],
      "DORIAN": [
         "C-7", "D-7", "E♭maj7", "F7", "G-7", "A-7(♭5)", "B♭maj7"
      ],
      "PHRYGIAN": [
         "C-7", "D♭maj7", "E♭7", "F-7", "G-7(♭5)", "A♭maj7", "B♭-7"
      ],
      "LYDIAN": [
         "Cmaj7", "D7", "E-7", "F♯-7(♭5)", "Gmaj7", "A-7", "B-7"
      ],
      "MIXOLYDIAN": [
         "C7", "D-7", "E-7(♭5)", "Fmaj7", "G-7", "A-7", "B♭maj7"
      ],
      "AEOLIAN": [
         "C-7", "D-7(♭5)", "E♭maj7", "F-7", "G-7", "A♭maj", "B♭7"
      ],
      "LOCRIAN": [
         "C-7(♭5)", "D♭maj7", "E♭-7", "F-7", "G♭maj7", "A♭7", "B♭-7"
      ]
   },
   "D♭": {
      "IONIAN": [
         "D♭maj7", "E♭-7", "F-7", "G♭maj7", "A♭7", "B♭-7", "C-7(♭5)"
      ],
      "DORIAN": [
         "D♭-7", "E♭-7", "F♭maj7", "G♭7", "A♭-7", "B♭-7(♭5)", "C♭maj7"
      ],
      "PHRYGIAN": [
         "D♭-7", "E♭♭maj7", "F♭7", "G♭-7", "A♭-7(♭5)", "B♭♭maj7", "C♭-7"
      ],
      "LYDIAN": [
         "D♭maj7", "E♭7", "F-7", "G-7(♭5)", "A♭maj7", "B♭-7", "C-7"
      ],
      "MIXOLYDIAN": [
         "D♭7", "E♭-7", "F-7(♭5)", "G♭maj7", "A♭-7", "B♭-7", "C♭maj7"
      ],
      "AEOLIAN": [
         "D♭-7", "E♭-7(♭5)", "F♭maj7", "G♭-7", "A♭-7", "B♭♭maj", "C♭7"
      ],
      "LOCRIAN": [
         "D♭-7(♭5)", "E♭♭maj7", "F♭-7", "G♭-7", "A♭♭maj7", "B♭♭7", "C♭-7"
      ]
   },
   "D": {
      "IONIAN": [
         "Dmaj7", "E-7", "F♯-7", "Gmaj7", "A7", "B-7", "C♯-7(♭5)"
      ],
      "DORIAN": [
         "D-7", "E-7", "Fmaj7", "G7", "A-7", "B-7(♭5)", "Cmaj7"
      ],
      "PHRYGIAN": [
         "D-7", "E♭maj7", "F7", "G-7", "A-7(♭5)", "B♭maj7", "C-7"
      ],
      "LYDIAN": [
         "Dmaj7", "E7", "F♯-7", "G♯-7(♭5)", "Amaj7", "B-7", "C♯-7"
      ],
      "MIXOLYDIAN": [
         "D7", "E-7", "F♯-7(♭5)", "Gmaj7", "A-7", "B-7", "Cmaj7"
      ],
      "AEOLIAN": [
         "D-7", "E-7(♭5)", "Fmaj7", "G-7", "A-7", "B♭maj", "C7"
      ],
      "LOCRIAN": [
         "D-7(♭5)", "E♭maj7", "F-7", "G-7", "A♭maj7", "B♭7", "C-7"
      ]
   },
   "E♭": {
      "IONIAN": [
         "E♭maj7", "F-7", "G-7", "A♭maj7", "B♭7", "C-7", "D-7(♭5)"
      ],
      "DORIAN": [
         "E♭-7", "F-7", "G♭maj7", "A♭7", "B♭-7", "C-7(♭5)", "D♭maj7"
      ],
      "PHRYGIAN": [
         "E♭-7", "Emaj7", "G♭7", "A♭-7", "B♭-7(♭5)", "C♭maj7", "D♭-7"
      ],
      "LYDIAN": [
         "E♭maj7", "F7", "G-7", "A-7(♭5)", "B♭maj7", "C-7", "D-7"
      ],
      "MIXOLYDIAN": [
         "E♭7", "F-7", "G-7(♭5)", "A♭maj7", "B♭-7", "C-7", "D♭maj7"
      ],
      "AEOLIAN": [
         "E♭-7", "F-7(♭5)", "G♭maj7", "A♭-7", "B♭-7", "C♭maj", "D♭7"
      ],
      "LOCRIAN": [
         "E♭-7(♭5)", "F♭maj7", "G♭-7", "A♭-7", "B♭♭maj7", "C♭7", "D♭-7"
      ]
   },
   "E": {
      "IONIAN": [
         "Emaj7", "F♯-7", "G♯-7", "Amaj7", "B7", "C♯-7", "D♯-7(♭5)"
      ],
      "DORIAN": [
         "E-7", "F♯-7", "Gmaj7", "A7", "B-7", "C♯-7(♭5)", "Dmaj7"
      ],
      "PHRYGIAN": [
         "E-7", "Fmaj7", "G7", "A-7", "B-7(♭5)", "Cmaj7", "D-7"
      ],
      "LYDIAN": [
         "Emaj7", "F♯7", "G♯-7", "A♯-7(♭5)", "Bmaj7", "C♯-7", "D♯-7"
      ],
      "MIXOLYDIAN": [
         "E7", "F♯-7", "G♯-7(♭5)", "Amaj7", "B-7", "C♯-7", "Dmaj7"
      ],
      "AEOLIAN": [
         "E-7", "F♯-7(♭5)", "Gmaj7", "A-7", "B-7", "Cmaj", "D7"
      ],
      "LOCRIAN": [
         "E-7(♭5)", "Fmaj7", "G-7", "A-7", "B♭maj7", "C7", "D-7"
      ]
   },
   "F": {
      "IONIAN": [
         "Fmaj7", "G-7", "A-7", "B♭maj7", "C7", "D-7", "E-7(♭5)"
      ],
      "DORIAN": [
         "F-7", "G-7", "A♭maj7", "B♭7", "C-7", "D-7(♭5)", "E♭maj7"
      ],
      "PHRYGIAN": [
         "F-7", "G♭maj7", "A♭7", "B♭-7", "C-7(♭5)", "D♭maj7", "E♭-7"
      ],
      "LYDIAN": [
         "Fmaj7", "G7", "A-7", "B-7(♭5)", "Cmaj7", "D-7", "E-7"
      ],
      "MIXOLYDIAN": [
         "F7", "G-7", "A-7(♭5)", "B♭maj7", "C-7", "D-7", "E♭maj7"
      ],
      "AEOLIAN": [
         "F-7", "G-7(♭5)", "A♭maj7", "B♭-7", "C-7", "D♭maj", "E♭7"
      ],
      "LOCRIAN": [
         "F-7(♭5)", "G♭maj7", "A♭-7", "B♭-7", "C♭maj7", "D♭7", "E♭-7"
      ]
   },
   "G♭": {
      "IONIAN": [
         "G♭maj7", "A♭-7", "B♭-7", "C♭maj7", "D♭7", "E♭-7", "F-7(♭5)"
      ],
      "DORIAN": [
         "G♭-7", "A♭-7", "B♭♭maj7", "C♭7", "D♭-7", "E♭-7(♭5)", "F♭maj7"
      ],
      "PHRYGIAN": [
         "G♭-7", "A♭♭maj7", "B♭♭7", "C♭-7", "D♭-7(♭5)", "E♭♭maj7", "F♭-7"
      ],
      "LYDIAN": [
         "G♭maj7", "A♭7", "B♭-7", "C-7(♭5)", "D♭maj7", "E♭-7", "F-7"
      ],
      "MIXOLYDIAN": [
         "G♭7", "A♭-7", "B♭-7(♭5)", "C♭maj7", "D♭-7", "E♭-7", "F♭maj7"
      ],
      "AEOLIAN": [
         "G♭-7", "A♭-7(♭5)", "B♭♭maj7", "C♭-7", "D♭-7", "E♭♭maj", "F♭7"
      ],
      "LOCRIAN": [
         "G♭-7(♭5)", "A♭♭maj7", "B♭♭-7", "C♭-7", "D♭♭maj7", "E♭♭7", "F♭-7"
      ]
   },
   "G": {
      "IONIAN": [
         "Gmaj7", "A-7", "B-7", "Cmaj7", "D7", "E-7", "F♯-7(♭5)"
      ],
      "DORIAN": [
         "G-7", "A-7", "B♭maj7", "C7", "D-7", "E-7(♭5)", "Fmaj7"
      ],
      "PHRYGIAN": [
         "G-7", "A♭maj7", "B♭7", "C-7", "D-7(♭5)", "E♭maj7", "F-7"
      ],
      "LYDIAN": [
         "Gmaj7", "A7", "B-7", "C♯-7(♭5)", "Dmaj7", "E-7", "F♯-7"
      ],
      "MIXOLYDIAN": [
         "G7", "A-7", "B-7(♭5)", "Cmaj7", "D-7", "E-7", "Fmaj7"
      ],
      "AEOLIAN": [
         "G-7", "A-7(♭5)", "B♭maj7", "C-7", "D-7", "E♭maj", "F7"
      ],
      "LOCRIAN": [
         "G-7(♭5)", "A♭maj7", "B♭-7", "C-7", "D♭maj7", "E♭7", "F-7"
      ]
   },
   "A♭": {
      "IONIAN": [
         "A♭maj7", "B♭-7", "C-7", "D♭maj7", "E♭7", "F-7", "G-7(♭5)"
      ],
      "DORIAN": [
         "A♭-7", "B♭-7", "C♭maj7", "D♭7", "E♭-7", "F-7(♭5)", "G♭maj7"
      ],
      "PHRYGIAN": [
         "A♭-7", "B♭♭maj7", "C♭7", "D♭-7", "E♭-7(♭5)", "F♭maj7", "G♭-7"
      ],
      "LYDIAN": [
         "A♭maj7", "B♭7", "C-7", "D-7(♭5)", "E♭maj7", "F-7", "G-7"
      ],
      "MIXOLYDIAN": [
         "A♭7", "B♭-7", "C-7(♭5)", "D♭maj7", "E♭-7", "F-7", "G♭maj7"
      ],
      "AEOLIAN": [
         "A♭-7", "B♭-7(♭5)", "C♭maj7", "D♭-7", "E♭-7", "F♭maj", "G♭7"
      ],
      "LOCRIAN": [
         "A♭-7(♭5)", "B♭♭maj7", "C♭-7", "D♭-7", "E♭♭maj7", "F♭7", "G♭-7"
      ]
   },
   "A": {
      "IONIAN": [
         "Amaj7", "B-7", "C♯-7", "Dmaj7", "E7", "F♯-7", "G♯-7(♭5)"
      ],
      "DORIAN": [
         "A-7", "B-7", "Cmaj7", "D7", "E-7", "F♯-7(♭5)", "Gmaj7"
      ],
      "PHRYGIAN": [
         "A-7", "B♭maj7", "C7", "D-7", "E-7(♭5)", "Fmaj7", "G-7"
      ],
      "LYDIAN": [
         "Amaj7", "B7", "C♯-7", "D♯-7(♭5)", "Emaj7", "F♯-7", "G♯-7"
      ],
      "MIXOLYDIAN": [
         "A7", "B-7", "C♯-7(♭5)", "Dmaj7", "E-7", "F♯-7", "Gmaj7"
      ],
      "AEOLIAN": [
         "A-7", "B-7(♭5)", "Cmaj7", "D-7", "E-7", "Fmaj", "G7"
      ],
      "LOCRIAN": [
         "A-7(♭5)", "B♭maj7", "C-7", "D-7", "E♭maj7", "F7", "G-7"
      ]
   },
   "B♭": {
      "IONIAN": [
         "B♭maj7", "C-7", "D-7", "E♭maj7", "F7", "G-7", "A-7(♭5)"
      ],
      "DORIAN": [
         "B♭-7", "C-7", "D♭maj7", "E♭7", "F-7", "G-7(♭5)", "A♭maj7"
      ],
      "PHRYGIAN": [
         "B♭-7", "C♭maj7", "D♭7", "E♭-7", "F-7(♭5)", "G♭maj7", "A♭-7"
      ],
      "LYDIAN": [
         "B♭maj7", "C7", "D-7", "E-7(♭5)", "Fmaj7", "G-7", "A-7"
      ],
      "MIXOLYDIAN": [
         "B♭7", "C-7", "D-7(♭5)", "E♭maj7", "F-7", "G-7", "A♭maj7"
      ],
      "AEOLIAN": [
         "B♭-7", "C-7(♭5)", "D♭maj7", "E♭-7", "F-7", "G♭maj", "A♭7"
      ],
      "LOCRIAN": [
         "B♭-7(♭5)", "Bmaj7", "D♭-7", "E♭-7", "Emaj7", "G♭7", "A♭-7"
      ]
   },
   "B": {
      "IONIAN": [
         "Bmaj7", "C♯-7", "D♯-7", "Emaj7", "F♯7", "G♯-7", "A♯-7(♭5)"
      ],
      "DORIAN": [
         "B-7", "C♯-7", "Dmaj7", "E7", "F♯-7", "G♯-7(♭5)", "Amaj7"
      ],
      "PHRYGIAN": [
         "B-7", "Cmaj7", "D7", "E-7", "F♯-7(♭5)", "Gmaj7", "A-7"
      ],
      "LYDIAN": [
         "Bmaj7", "C♯7", "D♯-7", "E♯-7(♭5)", "F♯maj7", "G♯-7", "A♯-7"
      ],
      "MIXOLYDIAN": [
         "B7", "C♯-7", "D♯-7(♭5)", "Emaj7", "F♯-7", "G♯-7", "Amaj7"
      ],
      "AEOLIAN": [
         "B-7", "C♯-7(♭5)", "Dmaj7", "E-7", "F♯-7", "Gmaj", "A7"
      ],
      "LOCRIAN": [
         "B-7(♭5)", "Cmaj7", "D-7", "E-7", "Fmaj7", "G7", "A-7"
      ]
   }
};


