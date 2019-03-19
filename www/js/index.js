/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    // Same than onCreate() Android Studio App
    onDeviceReady: function() {
        console.log(navigator.camera);

        //Listener botón hacer foto
        document.getElementById('btnFoto').addEventListener('click', () => {
            navigator.camera.getPicture(this.onSuccess, this.onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        });

    },

    //Foto sacada con éxito
    onSuccess: function(imageData) {
        document.getElementById('imagen').innerHTML = `<img id='myImage' src="" alt="Aquí va la foto" width="200" height="200"></img>`
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    },
    //Foto fallida
    onFail: function(message) {
        alert('Failed because: ' + message);
    }
};

app.initialize();