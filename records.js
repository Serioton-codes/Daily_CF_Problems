let records = `
current_date:2024-11-19
retyrn:1,1/2,3/1,3/2,1/1,2/2,1/1,1/2,2/1,1/2,3/1,1/2,3/1,2/2,3/1,1/2,1/1,1/2,3/1,2/2,3/1,1/2,1/1,2/2,5/1,1/2,5/1,1/2,4/1,1/2,5/1,1/2,6/1,1/2,5/1,1/2,23/1,1/2,5/1,1/2,22/1,1/2,1/0,1/2,33/1,1/2,18/1,1/2,22/1,1/2,11/1,1/2,9
mikeac:2,27/0,3/2,7/0,5/2,1/0,5/2,3/0,2/2,1/0,6/2,4/0,166
lengli:2,230
yawn_sean:2,230
lyxxys:1,1/0,50/2,3/1,1/2,9/1,2/2,1/1,2/2,1/1,1/2,11/1,1/2,5/1,1/2,1/1,1/2,25/1,1/2,39/1,1/2,10/1,1/2,5/1,1/2,5/1,1/2,5/1,1/2,16/1,1/2,5/1,1/2,14/1,1/2,6
ncf:1,15/0,3/1,48/2,1/1,6/2,1/1,5/2,1/1,6/2,1/1,28/2,1/1,4/2,2/1,5/2,1/1,4/2,1/1,15/0,82
tauros:2,54/0,176
sugar:1,1/0,229
tsreaper:2,230
grobycn:1,3/2,2/1,1/2,45/1,1/2,1/1,1/2,4/1,1/2,1/1,2/2,1/1,6/2,1/1,1/0,1/2,2/1,2/2,3/1,3/2,1/1,1/2,1/0,1/2,1/0,1/2,5/1,1/2,4/0,1/2,1/0,1/1,1/2,1/1,1/2,2/1,3/2,1/1,1/2,1/1,9/2,1/1,1/2,1/1,2/2,1/1,2/0,1/1,2/2,2/1,2/2,1/1,4/0,10/1,11/2,2/1,1/2,1/1,9/2,4/1,4/0,1/1,2/2,4/1,2/2,4/1,3/2,2/1,1/2,8/1,3/0,2/1,1/2,6/1,3/0,1/1,4
hum:2,64/1,1/2,6/1,1/2,5/1,1/2,19/1,1/2,3/1,1/2,17/1,1/2,5/1,1/2,3/1,3/2,7/1,1/2,1/1,1/2,4/1,3/2,3/1,4/2,5/1,1/2,1/1,2/2,1/1,2/2,4/1,1/2,3/1,5/2,1/1,1/2,1/1,2/2,3/0,3/2,2/1,1/2,2/1,1/2,1/1,1/2,1/1,3/2,2/1,4/2,1/1,5/2,2/1,4/2,2/0,1/1,5
md:1,2/0,2/1,2/0,3/1,6/2,8/1,1/2,3/1,3/2,20/1,1/2,1/1,2/2,4/1,1/2,5/1,1/2,6/1,1/2,3/1,1/2,1/1,1/2,3/1,3/2,5/1,1/2,5/1,1/2,1/1,5/2,1/1,1/2,1/1,3/2,1/1,1/2,1/1,1/2,4/1,4/2,4/1,20/2,1/1,11/2,1/1,11/2,1/1,42/0,1/1,7/0,3/1,1/0,4/1,1/0,2
innerworldexplorer:1,2/0,1/1,3/0,126/2,1/0,1/1,10/2,2/1,19/2,1/1,4/2,2/1,3/2,2/1,13/2,1/1,2/0,7/1,2/0,28
tiger2005:1,1/0,89/2,70/0,70
leoncn:1,1/2,1/1,1/2,2/1,1/2,3/1,4/2,1/1,1/2,11/1,4/2,3/1,2/2,2/1,2/2,1/1,2/2,4/1,2/2,7/1,1/2,2/1,1/2,4/1,5/2,1/1,1/2,1/1,7/2,5/1,1/2,3/1,3/2,3/1,1/2,11/1,1/2,1/1,1/2,2/1,10/2,4/1,1/2,5/1,20/2,2/1,4/2,1/1,5/2,2/1,1/2,1/1,2/2,11/1,1/2,5/1,1/2,4/1,2/2,2/1,1/2,1/1,3/0,31
linxiaotian:2,3/0,6/1,1/0,2/2,1/1,1/2,2/0,4/2,1/1,2/2,2/0,2/1,1/0,3/2,1/0,197
k423:2,1/0,1/2,1/0,3/2,4/0,1/2,63/0,155
cc4414:1,1/2,3/1,1/0,44/1,1/0,11/1,1/0,2/1,1/2,2/0,3/1,1/0,4/1,1/0,8/2,1/1,1/0,1/1,2/2,1/1,4/2,1/0,8/2,1/0,37/1,1/0,87
dinghc:1,4/2,3/1,3/2,1/1,2/2,1/1,3/2,1/1,3/2,1/0,1/2,2/1,3/2,2/1,1/2,1/1,2/2,3/1,4/2,2/1,1/2,2/1,1/2,1/0,1/1,4/0,2/1,3/0,1/1,5/0,5/1,1/0,3/1,3/0,4/1,2/0,2/1,2/0,4/1,1/0,1/1,4/0,1/1,3/0,5/1,1/0,2/2,1/1,2/2,1/0,1/1,1/2,1/1,3/0,2/1,5/0,3/1,2/0,2/1,10/0,2/1,2/2,2/0,1/1,4/0,1/1,7/0,2/1,4/0,3/1,2/0,1/1,6/0,2/1,5/0,8/2,1/1,1/0,2/1,5/0,2/1,6/0,1/1,2/0,2/1,2/0,1/1,4/0,1/1,1/0,1/1,2
leander:1,1/0,1/1,2/2,1/0,14/2,1/0,208
arrogant_sword:1,4/2,1/1,1/2,1/1,2/2,1/1,3/0,1/1,1/2,1/1,2/2,1/1,6/0,21/2,4/1,3/2,3/1,1/2,1/1,1/2,1/1,3/0,1/2,1/0,1/2,1/0,2/1,1/2,1/1,1/2,1/0,8/1,1/2,1/1,1/2,9/1,1/2,7/1,1/2,1/1,1/0,2/2,3/0,5/2,2/0,2/2,1/0,109
jinyumantang:1,2/0,62/2,2/0,19/1,1/0,38/1,2/0,19/1,1/0,82
hongrock:2,1/0,5/2,5/1,1/2,13/0,202
aging1986:1,1/0,62/2,2/0,162
test:1,1/0,226
cpchenpi:1,1/0,225
jie_chen:1,1/0,223
retyn:1,1/0,223
rememorio:1,2/0,220
jokemaker:1,1/0,1/1,3/0,9/1,1/0,207
yangsisi:1,1/0,53/1,1/0,167
yefei162:1,1/0,10/2,1/1,2/0,1/1,1/2,2/1,17/2,1/1,4/2,1/1,4/0,1/1,3/2,1/1,1/2,1/1,6/2,1/1,1/2,1/1,1/2,1/1,5/2,1/1,8/2,2/1,2/2,1/1,6/2,2/1,4/2,1/1,7/0,2/1,5/2,2/1,6/0,1/1,2/0,8/1,1/0,2/1,1/0,90
fatalerror:1,1/0,20/2,4/1,2/2,4/1,1/0,1/2,3/0,3/2,2/0,1/2,2/1,1/2,6/0,6/2,4/0,2/2,1/0,16/2,2/0,11/2,2/0,9/2,1/0,9/2,1/0,3/2,2/0,2/2,1/0,3/2,1/0,14/2,1/0,5/2,4/0,70
ynotbbetter:2,15/0,205
gh123:1,2/0,2/1,1/0,5/1,1/0,1/1,1/0,2/1,2/0,2/1,1/0,2/1,2/0,1/1,3/0,3/1,1/0,2/1,1/0,1/1,1/0,2/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/0,4/1,5/0,1/1,1/0,1/1,1/0,2/1,1/0,1/1,1/0,6/1,1/0,1/1,5/0,1/1,1/0,2/1,1/0,3/1,4/0,2/1,1/0,2/1,1/0,3/1,1/0,10/1,1/0,1/1,2/0,2/1,1/0,1/1,2/0,2/1,4/0,2/1,1/0,2/1,1/0,8/1,1/0,1/1,2/0,2/1,4/0,2/1,4/0,3/1,1/0,4/1,1/0,1/1,2/0,2/1,4/0,3/1,1/0,4/1,2/0,1/1,1/0,2/1,4/0,2/1,1/0,1/1,2/0,2/1,1/0,11
harmonly:1,2/0,1/1,1/0,1/2,2/1,1/0,1/1,1/0,14/1,1/0,2/1,1/0,13/1,1/0,5/1,1/0,170
iron_buster:1,1/0,13/1,2/0,24/1,1/0,24/1,1/0,22/1,1/0,12/1,1/0,65/1,1/0,50
sheepstick:2,54/0,15/2,9/0,140
ggl:1,1/0,8/1,1/0,16/1,2/0,54/1,1/0,45/1,1/0,89
ku:1,2/0,1/1,9/0,1/1,3/0,3/1,3/0,1/1,1/0,1/1,2/0,10/1,1/0,5/1,1/0,1/1,2/0,7/1,2/0,12/1,2/0,10/1,1/0,4/1,1/0,1/1,3/0,1/2,1/1,2/0,4/1,1/0,1/1,1/0,5/1,1/0,1/1,1/2,1/0,1/1,2/0,5/1,1/0,3/1,1/0,28/1,4/0,5/1,1/0,11/1,1/0,12/1,1/0,32
nreyog:1,1/0,7/1,1/0,12/1,1/0,196
windly:1,4/2,2/1,11/2,1/1,5/0,194
toc:1,1/0,1/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/2,1/1,2/0,3/1,19/0,1/1,5/0,1/1,2/0,1/1,1/0,3/1,10/0,1/1,1/0,1/1,14/0,1/1,11/0,122
djl777:2,1/0,4/2,1/0,83/2,1/0,5/2,1/0,35/2,2/0,4/2,1/0,5/2,1/0,73
inhng:1,2/2,1/0,1/1,73/2,1/1,16/2,1/1,29/0,92
yss:1,1/0,215
sprite:1,1/0,4/2,1/1,2/0,1/2,1/0,1/1,3/0,1/2,1/1,5/2,2/1,3/0,1/1,5/0,1/1,2/0,1/1,1/0,178
deckedge:1,1/0,11/1,1/0,2/2,2/0,2/1,1/0,1/1,4/0,2/1,1/2,1/1,2/2,1/0,1/1,3/2,1/1,1/0,1/1,1/2,1/1,1/2,2/1,1/2,4/1,2/2,5/1,3/2,1/1,3/2,3/1,1/0,10/2,3/0,2/1,1/2,1/1,2/0,1/1,1/0,1/1,2/0,2/1,1/0,1/2,1/1,2/0,5/1,1/0,3/1,2/0,3/1,1/0,2/1,1/0,2/1,2/0,1/1,1/0,4/1,1/0,4/1,3/0,1/1,2/0,2/1,1/0,27/1,2/0,6/1,1/0,18/1,2/0,19
ldh:2,10/0,3/2,2/0,72/2,6/0,120
wink:1,4/2,1/0,2/1,8/0,4/1,4/0,8/1,1/0,1/1,1/0,1/1,2/0,51/2,1/0,124
octal2024:2,1/0,1/1,2/0,208
pdocw:2,1/1,36/0,17/1,4/0,44/1,2/0,16/1,6/0,86
wanderovo:2,4/1,2/2,1/1,5/2,1/1,4/2,4/1,5/2,1/1,3/2,4/1,1/2,1/1,1/2,3/1,1/2,1/1,2/2,2/1,2/2,5/1,3/2,1/1,1/2,1/1,1/2,3/1,2/2,8/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,3/1,1/2,2/1,1/2,2/1,1/2,5/1,1/2,1/1,1/2,1/1,3/2,1/1,12/2,1/1,2/2,5/1,1/2,1/1,2/2,1/1,4/2,1/1,4/0,1/2,1/1,3/0,1/1,10/2,2/1,2/2,2/1,3/2,3/1,3/2,2/1,1/2,4/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,5/1,1/2,1/1,1/2,1/1,9/2,4/1,6
dwq:1,2/0,1/1,4/0,1/1,2/0,2/1,5/0,1/1,4/0,2/1,4/0,1/1,9/0,4/1,3/0,167
override:1,52/2,1/1,18/2,1/1,26/0,2/1,1/0,111
hang:1,212
wangggong:1,1/0,3/2,1/0,5/2,2/1,1/0,1/1,2/2,1/1,1/0,1/1,1/0,2/1,1/0,3/1,1/0,4/1,3/0,1/1,2/0,12/1,4/0,3/2,1/0,1/1,1/0,3/1,2/0,2/1,4/0,23/1,1/0,116
goodluck_ccq:1,2/0,1/2,1/0,205
yskm-an:1,1/0,1/1,10/2,1/1,3/0,191
ranzhi:1,1/0,4/1,2/0,1/1,1/0,1/1,1/0,13/1,3/0,1/1,1/2,1/1,5/2,1/1,1/0,3/1,2/0,1/1,5/0,2/1,1/0,37/1,3/0,3/1,8/0,104
hopeworse:2,8/1,2/2,11/1,1/2,5/1,2/2,1/0,175
550n:1,4/0,1/1,1/0,121/2,2/1,2/0,74
dwq_n:1,1/0,204
subcrip:2,1/0,199
anonymous:1,1/0,3/1,1/0,194
lu_xz:1,1/2,2/1,1/2,3/1,1/0,1/1,1/0,4/1,1/0,3/2,9/1,1/2,1/1,1/0,4/2,5/0,1/2,9/0,6/2,1/0,2/2,3/0,1/2,8/0,18/2,1/0,109
yakultgo:1,1/2,29/0,1/2,5/0,1/2,3/0,1/2,6/0,2/2,4/0,1/2,6/0,1/2,3/0,1/2,1/0,1/2,11/0,2/2,9/0,2/2,1/0,1/2,3/0,1/2,2/0,1/2,2/0,9/2,1/0,6/2,1/0,32/2,2/0,1/2,2/0,1/2,2/0,1/2,4/0,1/2,3/0,1/2,7/1,1/2,2/0,1/2,1/0,14
windj0y:2,1/0,5/2,10/1,2/2,4/1,1/2,4/1,3/2,1/1,3/2,1/1,4/0,1/1,1/0,3/1,1/0,149
zhangk33:1,1/2,1/0,191
shawnqiang:1,2/0,37/1,1/0,3/1,1/0,149
mrsuns:2,3/1,1/2,3/1,1/2,7/1,1/2,1/1,1/2,1/0,3/1,1/2,2/1,1/0,2/1,1/2,4/0,3/2,1/0,5/2,2/0,3/1,1/0,30/1,2/0,19/2,7/0,5/1,1/2,3/1,1/0,8/2,1/0,66/2,1
liketheflower:2,7/1,6/2,1/1,6/0,172
mymsx:1,1/0,5/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,1/1,2/0,175
buxiang_qichuang:1,1/0,189
buxiang-qichuang:1,1/0,17/1,2/0,2/1,3/0,165
jy_xiaoying:2,2/1,2/0,11/1,28/0,1/1,1/0,1/1,7/0,2/1,1/0,12/1,2/0,1/1,1/0,10/1,1/0,1/1,2/0,8/1,1/0,1/1,6/0,1/1,1/0,1/1,1/0,3/1,2/0,1/1,2/0,31/1,1/0,2/1,2/0,4/1,1/0,1/1,7/0,1/1,4/0,20
lang:1,1/0,186
absndon2:1,1/0,186
anandon2:1,1/0,42/1,1/0,143
abandon2:2,13/1,1/0,1/2,7/1,1/2,4/0,1/2,5/0,1/1,1/2,3/1,1/0,1/2,2/1,1/2,2/0,1/2,1/1,1/2,1/1,1/2,1/0,1/1,2/2,2/0,4/2,2/1,1/2,8/0,11/2,5/1,1/2,1/0,97
xylu:2,2/1,1/0,1/2,2/1,6/2,1/1,1/2,1/1,1/2,5/1,1/2,11/1,1/2,7/1,3/2,4/1,1/0,3/2,1/1,1/2,4/0,96/1,3/2,2/1,5/0,1/1,2/0,1/1,2/2,1/1,1/0,1/2,1/1,1/0,11
qiuuuuut:1,1/0,185
1zhao:2,1/1,1/2,1/1,1/2,2/0,37/1,1/0,35/1,1/2,2/1,3/2,1/1,1/2,1/1,6/0,4/1,2/0,4/2,2/0,1/1,2/0,75
qiuuuuuut:1,1/0,39/2,1/1,1/2,1/0,1/2,2/1,1/2,2/0,2/2,1/1,1/0,131
amani:1,1/0,2/1,3/2,1/0,1/1,4/0,1/1,1/0,2/1,3/0,1/1,1/0,1/1,2/0,2/1,1/0,1/1,2/2,1/1,5/0,2/1,4/0,1/2,1/1,4/0,17/1,1/0,82/1,2/0,2/1,2/0,28
smallboatc:2,1/1,1/0,2/1,2/0,87/1,1/0,88
sjw712:2,2/0,100/2,11/1,1/2,17/0,1/2,8/0,1/2,5/1,1/2,2/0,1/2,5/0,27
yoonsica:2,6/0,63/2,2/0,1/2,2/1,1/0,3/2,4/1,1/0,1/2,1/1,1/0,65/2,3/0,3/2,1/0,24
equinox:1,4/2,3/0,4/2,5/0,14/2,2/1,1/2,1/0,2/2,12/1,3/2,1/1,2/0,7/2,2/0,1/2,1/0,1/2,12/1,1/2,3/1,1/2,30/1,1/2,23/1,1/2,7/0,37
zongjy:2,3/1,2/2,1/1,1/2,1/0,1/1,1/2,4/0,3/2,1/1,1/2,1/0,161
cat丶:1,3/0,178
octal:1,1/0,35/2,1/1,2/0,104/1,1/2,1/1,2/2,1/0,3/1,3/0,26
empty_dust:2,3/0,11/2,1/1,1/0,1/2,1/0,1/1,1/0,160
baozii:1,4/0,21/2,1/0,3/1,4/2,1/1,2/2,5/1,1/2,1/1,2/0,31/1,1/0,102
lu1no:2,1/0,35/1,1/2,1/0,44/2,2/1,4/0,90
baile:1,3/0,7/1,1/0,2/1,2/0,1/1,1/0,2/1,1/0,4/1,2/0,152
kokomi:2,1/1,1/2,2/1,1/2,1/0,2/2,4/1,1/0,1/2,1/0,35/2,1/1,2/0,97/2,1/0,1/2,3/1,2/0,1/2,3/0,3/2,1/0,1/2,1/1,1/0,3/2,1/0,6
little_j:1,1/0,177
luchy0120:2,11/1,2/2,9/1,1/2,1/1,1/0,152
minsongkang1:1,1/0,176
djzzwx:1,1/2,1/0,4/2,4/1,2/2,3/1,1/2,1/0,1/2,3/0,3/2,3/0,3/2,1/0,1/2,3/0,2/2,1/0,4/2,1/1,1/2,1/0,131
rui_er:2,12/0,164
pandaomeng:1,1/0,1/1,1/2,1/1,1/0,1/1,4/0,13/1,1/0,152
lyxxyx:1,1/0,175
lxcxz:1,1/0,25/1,1/0,149
if:1,16/2,1/1,31/0,72/1,1/2,1/1,5/0,2/1,2/0,5/1,1/0,1/1,1/0,1/1,1/0,1/1,3/0,1/1,3/0,1/1,1/0,1/1,2/0,1/1,1/0,3/1,3/0,4/1,1/0,7/1,1/0,1
zone:2,1/0,1/1,1/0,2/2,4/1,2/2,1/1,1/2,3/1,1/2,1/1,3/2,1/1,1/2,4/1,2/0,2/2,1/1,2/2,1/1,3/0,4/2,4/1,1/0,5/1,1/0,4/1,1/0,25/2,1/0,21/2,1/1,1/2,2/0,1/2,1/0,4/2,2/1,1/2,4/0,3/2,1/1,1/2,3/0,1/2,4/0,11/2,2/0,27
slashteen:1,5/0,67/1,1/0,102
y_hc:1,3/0,3/1,1/0,48/1,1/0,64/1,1/0,54
37:1,1/0,8/1,1/0,21/1,1/0,143
brusgry:2,1/0,173
banfenhaochi:1,2/0,34/1,1/0,5/1,1/0,5/1,1/0,5/1,2/0,116
pandoameng:1,1/0,170
rainmemery:1,1/0,170
xyz_herry:1,2/0,2/1,3/0,14/1,1/0,149
dawnmagnet:2,1/0,6/2,2/0,46/2,1/0,9/2,1/0,9/2,5/0,6/2,11/1,1/2,2/1,1/0,69
buer:1,1/2,1/1,1/2,1/1,1/0,1/2,3/1,1/2,1/1,1/0,1/2,3/0,9/2,3/0,1/1,3/0,5/2,1/1,3/0,66/1,1/0,62
lazysheep:1,11/0,37/1,1/0,5/1,1/0,23/2,2/1,2/0,20/1,2/0,66
kangminsong0:1,1/0,1/1,1/0,166
limerence:1,1/2,2/1,1/2,2/0,1/1,1/0,2/1,1/0,1/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,4/1,1/0,140
cming:2,2/0,22/1,1/0,139
pangyou3s:1,1/0,162
jerry66:2,1/0,11/2,1/0,4/2,2/0,4/2,1/0,10/2,1/0,16/1,1/0,110
openmi:1,6/0,1/1,9/0,17/1,4/2,2/1,5/0,5/1,13/2,1/1,1/2,1/1,6/0,15/1,1/0,47/1,1/0,1/1,1/0,21
lengnian7:1,1/0,5/1,1/2,2/0,149
kurtis:2,3/1,9/2,1/1,1/0,2/1,1/2,2/0,2/1,2/2,2/1,12/2,5/1,6/0,110
rocky:2,2/0,155
echo:1,2/0,1/1,2/0,16/1,1/0,135
cxhscst2:2,3/0,1/2,3/1,1/2,1/1,3/2,1/1,6/0,34/1,1/0,5/1,1/0,96
dijs_sdd:1,4/0,6/1,1/0,1/1,1/0,2/1,1/0,4/1,1/0,2/1,1/0,24/1,1/0,104
sigma-yyf:2,1/1,1/0,2/1,1/0,8/1,2/0,3/2,2/1,1/0,1/1,1/0,2/1,1/0,126
yrlpiao:2,1/1,2/2,8/1,1/2,2/1,1/0,1/2,1/0,2/2,1/0,1/1,1/0,2/1,1/0,1/1,1/0,7/1,1/0,4/1,1/0,5/1,1/0,5/2,3/0,9/2,4/0,85
lengnian:1,1/0,12/2,11/0,3/2,1/0,9/2,2/0,1/2,4/1,1/2,1/0,1/2,2/1,1/2,3/1,2/2,1/1,2/2,6/1,1/2,3/1,2/2,1/1,2/2,1/0,1/2,5/1,1/2,1/0,2/2,1/1,1/2,2/1,2/2,1/1,1/2,4/0,56
eunoiay:2,3/1,2/0,10/1,1/0,7/2,1/0,121
ran_zhi:1,1/0,1/1,4/2,1/1,1/0,3/1,1/0,1/1,2/0,129
xuwuze:1,2/0,139
zazhiii:1,2/0,53/1,2/0,79
lettera:1,2/2,1/1,3/0,15/1,1/2,1/1,3/2,2/0,3/1,1/0,2/1,1/0,1/1,6/0,2/1,1/2,1/1,1/2,2/0,2/1,4/0,2/2,1/1,1/2,1/1,1/0,1/1,3/2,1/0,1/1,1/0,3/1,1/0,1/1,1/0,2/2,2/1,1/0,1/2,4/1,1/0,1/2,4/0,1/1,1/2,2/1,1/2,2/0,1/2,11/1,1/2,1/1,2/2,2/1,1/2,1/1,1/2,2/1,7/2,4/1,1/2,1/0,1/1,1/0,1
metal_frog:1,1/0,30/2,9/1,1/2,23/0,1/2,1/1,1/2,8/1,3/0,8/2,3/1,1/2,1/0,7/2,1/0,36
zyc:1,1/0,132
alwaysce:1,1/2,1/1,3/2,1/1,2/2,1/1,2/2,3/1,1/2,5/1,1/2,1/1,1/2,5/1,1/2,1/0,5/2,4/1,2/2,11/1,1/2,11/1,1/2,4/1,1/2,63
sjohn:2,3/0,130
deemo_ml:1,7/0,125
dbwglx:1,1/0,131
meikisisui:1,4/0,2/1,1/0,1/1,1/0,3/1,1/0,3/1,1/0,2/1,2/0,2/1,2/0,5/1,1/0,1/1,1/0,2/2,1/1,3/0,2/1,3/2,1/0,1/1,1/2,1/1,4/2,2/1,7/2,2/1,1/2,4/1,4/2,3/1,1/2,1/0,5/1,1/0,1/2,1/1,11/0,1/1,9/2,1/1,10/0,1/1,12/0,1/1,1
kamtuo:2,53/0,1/2,5/0,1/2,5/0,1/1,1/0,1/2,4/1,1/2,12/0,8/1,1/2,1/0,1/2,1/0,1/2,1/1,1/0,4/2,3/0,1/2,1/1,1/2,1/0,3/2,7/1,1/2,1/1,1/2,1/0,2/2,1
kod:1,2/0,2/1,1/0,3/1,1/0,3/1,1/0,15/1,1/0,1/1,2/0,23/2,1/0,70
lyongwolf:1,1/0,1/1,1/2,4/1,10/0,5/1,1/0,2/1,1/0,99
arrogant_sword,cpp:1,1/0,124
liryc:1,16/2,2/1,6/2,1/1,6/2,1/1,1/2,1/1,26/2,1/1,8/2,1/1,3/2,1/1,11/2,2/1,38
kita_ikuyo:2,1/0,1/1,2/0,38/2,1/1,1/2,1/0,77
sbjohn:2,1/0,1/2,1/0,10/2,2/0,4/2,1/0,1/2,1/0,1/1,1/0,96
yefei:1,1/0,119
bond_james:1,1/2,3/0,10/1,2/0,3/1,1/0,2/1,1/0,1/1,1/0,4/1,1/0,87
crzhou:1,1/0,1/2,1/0,3/2,9/1,1/0,2/2,8/1,1/0,3/2,3/1,1/2,1/0,1/2,5/1,1/2,3/1,1/0,2/2,1/1,1/0,4/2,2/1,1/0,3/2,5/1,2/0,2/2,1/0,2/2,7/1,2/2,3/1,1/2,2/1,1/2,1/1,1/2,2/1,2/2,1/1,1/2,2/1,1/0,1/1,1/0,1/2,1/0,5/1,1/0,5/1,2
fancyalad:1,4/0,2/1,1/0,1/1,2/0,5/1,1/0,92
xzx:1,4/0,1/1,1/0,99
kamito:1,8/0,96
catchfree1225:2,8/1,1/2,1/1,1/0,1/1,1/2,4/1,1/2,3/1,3/2,2/1,4/2,2/1,10/2,1/1,6/0,55
mono_4:1,1/0,1/1,1/0,2/1,1/0,5/1,1/0,92
lengian:1,1/0,14/1,1/0,87
jun:2,1/0,101
chizer:1,1/0,98
legnian:1,1/0,95
zrnstnsr:2,26/1,1/2,8/1,1/2,1/1,1/0,57
yunc:1,1/0,93
xiaoretaw:2,6/0,1/2,1/0,2/1,1/0,81
boulimhh:1,23/0,1/1,13/0,1/1,12/0,3/1,1/0,1/1,18/0,1/1,7/0,1/1,4/0,1/1,1/0,3
sdjasj:1,3/0,7/2,1/1,1/0,77
crzhou,py:1,1/0,82
stcnpc:1,3/0,2/1,1/0,6/1,1/0,70
kmiao:1,2/2,1/0,2/2,1/0,1/1,1/0,8/1,1/0,65
dawmagnet:1,1/0,75
wanerovo:1,1/0,74
jackeyhua:1,2/2,1/1,5/0,67
yuexihuachen:1,1/0,5/1,2/0,65
bonelight:1,1/2,50/1,1/2,5/1,6/2,5/1,2/2,2
metal_grog:1,1/0,70
dawnmanget:1,1/0,69
_boulimhh:1,1/0,67
javaminus:1,2/2,1/1,2/2,1/1,1/2,2/1,7/0,51
artoor:1,1/0,66
lettear:1,1/0,63
gaoeight:2,1/1,1/0,1/2,2/1,1/2,1/1,1/0,1/1,1/0,52
juyou:1,1/0,60
yui:1,5/0,1/1,1/0,1/1,2/0,1/1,7/2,1/1,7/2,1/0,29
helltractor:2,3/1,1/2,2/0,1/2,1/1,3/0,43
newcow:1,1/0,1/1,1/0,2/1,1/0,4/1,1/0,42
yuxue_r:1,8/0,10/1,26/0,1/1,1/0,1/1,1/0,1/1,1
syrus:1,1/0,49
liuxb:1,1/0,47
metal_forg:1,1/0,45
euphoriababy:2,1/0,43
sjw712cpp:1,1/0,41
lianxuhanshu:2,3/0,1/2,1/1,1/2,2/0,1/2,5/1,1/2,1/0,1/2,1/0,4/1,1/2,1/0,17
zar13:2,2/1,8/0,2/1,1/0,2/1,7/0,2/1,5/2,1/1,3/0,7
lovs_code_lx:1,1/0,38
legnli:1,1/0,37
songyl:1,1/0,36
xzx_com:1,11/2,1/1,6/0,1/1,1/0,16
qsmcgogo:1,4/0,28
zard13:1,1/0,3/1,1/0,26
charleschile:2,1/0,30
zard:1,1/0,29
uy__uy:1,3/0,3/1,1/0,1/1,1/0,2/1,1/0,17
lyxxxys:1,1/0,27
jkboy:1,1/0,22
azureboy:1,1/0,20
guangong789:1,1/0,20
sam_jiang:1,1/2,1/0,5/2,1/0,1/1,1/0,10
wushf:1,1/0,16
reoden:1,2/2,2/1,4/2,1/1,1/2,1/0,5
6_1:1,1/0,15
550:1,1/0,13
cxyfer:2,2/1,2/0,9
zouyua:2,3/1,2/0,1/2,1/1,1
yuxue:1,1/0,1
skipped_dates:y2024,m3,0310172431,m4,07142128,m5,05121926,m6,0209162330,m7,07142128,m8,04111825,m9,0108152229,m10,06132027,m11,031017
`;
