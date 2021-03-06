
#!/bin/bash
if [ "$1" == 'stop' ]; then
        echo "Stopping selenium server..."
        pid=`ps -eo pid,args | grep server-standalone-2.47.0.jar | grep -v grep | cut -c1-6`
        echo $pid
        kill $pid
elif [ "$1" == 'start' ]; then
        echo "Starting selenium server..."
        PATH="./node_modules/phantomjs/bin:$PATH" java -jar selenium-server-standalone-2.47.0.jar &
        sleep 5
        echo "Done Sleeping"
        ./node_modules/.bin/wdio wdio.conf.js
else
        echo "Nothing to do"
fi
