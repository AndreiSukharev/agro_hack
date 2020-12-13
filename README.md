# OP

[Server] Python (Flask)

[IOS, Android] ReactNative, TypeScript

## Project structure
```
app/ (mobile app)
server/ (api for neural network)
```

## Getting Started

### Install
```
brew update
brew install node
npm install -g expo-cli
```


### Server
```
cd hack/server
pip3 install -r requirements.txt
export FLASK_APP=main.py
python3 -m flask run
```
### Mobile application
```
cd hack/app
npm i
expo start
follow the instruction in the browser to launch mobile app in expo environment
```

### Note
For background work:
```
nohup python3 -m flask run --host 0.0.0.0 & 
```

