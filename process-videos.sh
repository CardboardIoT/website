#!/bin/bash

w=600
h=-1

input_file=$1
video_only_file=video-only-${input_file}
scaled_file=${w}-${input_file}.mp4
image_file=${input_file}.jpg

# Strip audio
ffmpeg -i $input_file -c copy -an $video_only_file

# Scale
ffmpeg -i $video_only_file -b 1500k -vcodec libx264  -g 30 -filter:v scale=$w:$h -c:a copy $scaled_file

# Image
ffmpeg -i $scaled_file -ss 0 -vframes 1 -vcodec mjpeg -an -y $image_file
