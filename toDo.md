# GLOBAL
`- remove reload`

# RULES
- add gsap autoalpha and remove other show/hide things
- sharp images - recognize all notes
- play button after rules
`- rules on click pause game - disable all`

# SWITCHES
`- change switches`
- disable - turn off both switches
- if all switches off - disable all 
- send switched(all buttons as an object) to sessionStorage - enable load next level with preview user settings(theme)
`- after the end, it is possible to play with switches`
`- disable user select blue background flash`

# LEVEL
`- possible to click twice on next level button`

# TIMER
`- time color red - theme change`
`- clearInterval(countSeconds) - problem`
`- timer double speed on double start button`
`- timer -1`
`- bonus time animation`
`- if time is off - no bonus time`
- count seconds as score ?
- add bonus time on next level ?

# RESET
- if the game ends and play sounds and press reset game still play rest of the sounds - set animation after play finish

# START
`- startButton is a switch`
`- start/pause same button `
`- if the game is paused it is possible to start time, rotate cards, sounds - by switching the switch btns`
`- if the game is paused, show to user that state with some design`

# GAME
`- load next level popup after finish game level`
`- add card light(dot) indicator if play only with sound`
`- if the user clicks on the next level and the first card is open indicator is still opened`
`- end game -> if sound is off do not play sound, just open cards`
`- less 10 sec indicator red`
- end game button scenarios
- phone & tablet only sound
- click on the card and the game is paused - show popup `start the game` or game starts with the first click
- warning for people with disabilities
- add harp and rhodes sounds
- code refactoring (do not forget return from func, DRY, compose/pipe ..)
- test game
