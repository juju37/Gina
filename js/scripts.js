
var Model = {};
//Pour stocker le choix du canal midi.  Canal 0 par défaut.
Model.midiChannel = 0;


Model.data = {
  // les paramètres musicaux du synthé. Ne sont jamais envoyés : MOD_RATE MOD_DEPTH BRILLIANCE ENV_TIME
    LFO_RATE: {
        sysexId:24,
        value: 0,
        type: "integer",
        min: 0,
        max: 127
    },
    LFO_DELAY: {
        sysexId:25,
        value: 0,
        type: "integer",
        min: 0,
        max: 127
    },
    DCO_RANGE: {
          sysexId:6,
          value: 0,
          type: "integer",
          min: 0,
          max: 3
    },
    DCO_LFO: {
          sysexId:11,
          value: 0,
          type: "integer",
          min: 0,
          max: 127
    },
    DCO_ENV: {
          sysexId:12,
          value: 0,
          type: "integer",
          min: 0,
          max: 127
    },
    DCO_ENV_MODE: {
          sysexId:0,
          value: 0,
          type: "integer",
          min: 0,
          max: 3
    },
    DCO_AFTER: {
          sysexId:13,
          value: 0,
          type: "integer",
          min: 0,
          max: 127
    },
    //Ju 23/01/19
    DCO_WAVE_PLS: {
      sysexId:3,
      value: 0,
      type: "integer",
      min: 0,
      max: 3
    },
    DCO_WAVE_SAW: {
      sysexId:4,
      value: 0,
      type: "integer",
      min: 0,
      max: 5
    },
    DCO_WAVE_SUB: {
      sysexId:5,
      value: 0,
      type: "integer",
      min: 0,
      max: 5
    },
    DCO_SUB_LVL: {
      sysexId: 7,
      value: 0,
      type: "integer",
      min: 0,
      max: 3
    },
    DCO_NOISE: {
      sysexId: 8,
      value: 0,
      type: "integer",
      min: 0,
      max: 3
    },
    DCO_PWM_DEPTH: {
      sysexId: 14,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    DCO_PWM_RATE: {
      sysexId: 15,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCF_HPF: {
      sysexId:9,
      value: 0,
      type: "integer",
      min: 0,
      max: 3
    },
    VCF_FREQ: {
      sysexId:16,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCF_RESONANCE: {
      sysexId:17,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCF_LFO: {
      sysexId:18,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCF_ENV: {
      sysexId:19,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCF_ENV_MODE: {
      sysexId:1,
      value: 0,
      type: "integer",
      min: 0,
      max: 3
    },
    VCF_KEY: {
      sysexId:20,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCF_AFTER: {
      sysexId:21,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCA_LEVEL: {
      sysexId:22,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    VCA_ENV_MODE: {
      sysexId:2,
      value: 0,
      type: "integer",
      min: 0,
      max: 3
    },
    VCA_AFTER: {
      sysexId:23,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    CRS_SWITCH: {
      sysexId:10,
      value: 0,
      type: "integer",
      min: 0,
      max: 1
    },
    CRS_RATE: {
      sysexId:34,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    BENDER: {
      sysexId:35,
      value: 0,
      type: "integer",
      min: 0,
      max: 12
    },
    //Ju 24/01/19
    ENV_T1: {
      sysexId:26,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_L1: {
      sysexId:27,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_T2: {
      sysexId:28,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_L2: {
      sysexId:29,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_T3: {
      sysexId:30,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_L3: {
      sysexId:31,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_T4: {
      sysexId:32,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    },
    ENV_KEY: {
      sysexId:33,
      value: 0,
      type: "integer",
      min: 0,
      max: 127
    } //ci-dessous viennent les constantes, en-tête et balise de fin de message Sysex
      //pour l'instant en pseudo-code
      // 00 a  240 F0h          Message Sysex
      // 01 b   65 41h          ID ce synthé est un Roland
      // 02 c   53 35h          on dit qu'on envoie tous les paramètres
      // 03 d    0  0h          le canal MIDI (par défaut, ce sera zéro pour commencer. Il faudra une liste)
      // 04 e   35 23h          Modèle du synthé (Ju-1, Ju-2)
      // 05 f   32 20h          Level # = 1 (c'est pas moi qui le dit, c'est la doc)
      // 06 g    1  1h          Group # (pareil)
      // 07 h00  DCO_ENV_MODE
      // 08 h01  VCF_ENV_MODE
      // 09 h02  VCA_ENV_MODE
      // 10 h03  DCO_WAVE_PLS
      // 11 h04  DCO_WAVE_SAW
      // 12 h05  DCO_WAVE_SUB
      // 13 h06  DCO_RANGE
      // 14 h07  DCO_SUB_LVL
      // 15 h08  DCO_NOISE
      // 16 h09  VCF_HPF
      // 17 h10  CRS_SWITCH
      // 18 h11  DCO_LFO
      // 19 h12  DCO_ENV
      // 20 h13  DCO_AFTER
      // 21 h14  DCO_PWM_DEPTH
      // 22 h15  DCO_PWM_RATE
      // 23 h16  VCF_FREQ
      // 24 h17  VCF_RESONANCE
      // 25 h18  VCF_LFO
      // 26 h19  VCF_ENV
      // 27 h20  VCF_KEY
      // 28 h21  VCF_AFTER
      // 29 h22  VCA_LEVEL
      // 30 h23  VCA_AFTER
      // 31 h24  LFO_RATE
      // 32 h25  LFO_DELAY
      // 33 h26  ENV_T1
      // 34 h27  ENV_L1
      // 35 h28  ENV_T2
      // 36 h29  ENV_L2
      // 37 h30  ENV_T3
      // 38 h31  ENV_L3
      // 39 h32  ENV_T4
      // 40 h33  ENV_KEY
      // 41 h34  CRS_RATE
      // 42 h35  BENDER
      // 43 i  247 F7h          Fin du message Sysex (soit 44 valeurs au total)
  };

//Fonction de mise à jour des sliders ou inputs
function updateTextInput(input,val,blnRadio) {
          

          //récupérer la liste de tous les inputs dont le nom (en string) a été passé en paramètre.  Typiquement un tandem input+Slider qui ont un data-param = 'LFO_DELAY'
          //Il faut bien pouvoir les identifier les boutons radios dont les valeurs ne sont jamais mises à jour. 
          //Le paramètre booléen blnRadio n'est passé à partir du html que pour les boutons radios 
          var inputs = document.querySelectorAll("[data-param='" + input + "']");
          //On a désormais un array d'obejts DOM qui ont l'attribut défini.  On itère sur chacun de ces objets DOM
          for (var i = 0; i<inputs.length;i++) {
            //et sur chacun de ces objets on assigne la valeur passée en paramètre.
            //Comme ça, tous les objets DOM qui on un attribut data-param="TOTO" par exemple si TOTO était passé dans le paramètre input, 
            //se verront assigner la valeur val passée en paramètre

            //Si un petit malin s'amuse à mettre des trucs interdits genre des caractères ou des nombres plus grands que la plage autorisée on met tout au min ou au max selon
            //Si on rentre autre chose qu'un numérique on force à zéro
            if (Model.data[input].min <= parseInt(val) && Model.data[input].max >= parseInt(val)) {
              //Si c'est pas un bouton radio on met à jour les inputs sur l'écran de l'utilisateur
              if (!blnRadio) {inputs[i].value = parseInt(val);}
              //Maintenant on met à jour le modèle de données (on stocke quoi....pour pouvoir envoyer le message sysex)
              setModel(input,val);

            } else if (Model.data[input].min > parseInt(val)){
              //Si c'est pas un bouton radio on met à jour les inputs sur l'écran de l'utilisateur
              if (!blnRadio) {inputs[i].value = Model.data[input].min;}
              //Maintenant on met à jour le modèle de données (on stocke quoi....pour pouvoir envoyer le message sysex)
              setModel(input,Model.data[input].min);
            }
            else if (Model.data[input].max < parseInt(val)){
              //Si c'est pas un bouton radio on met à jour les inputs sur l'écran de l'utilisateur
              if (!blnRadio) {inputs[i].value = Model.data[input].max;}
              //Maintenant on met à jour le modèle de données (on stocke quoi....pour pouvoir envoyer le message sysex)
              setModel(input,Model.data[input].max);
            }
            else {
              //Si c'est pas un bouton radio on met à jour les inputs sur l'écran de l'utilisateur
              if (!blnRadio) {inputs[i].value=0;}
              //Maintenant on met à jour le modèle de données (on stocke quoi....pour pouvoir envoyer le message sysex)
              setModel(input,0);
            }
          }
          
          //variable qui sert à rien, juste pour mettre un point d'arrêt javascript et vérifier en débuggage que le modèle a bien été mis à jour
          var rien;

          sendSysex();
          /*version jQuery plus concise pour itérer - donné pour mémoire, mais encore faut-il déclarer les libs jQuery dans les balises <script> dans la section <head>
          $("[data-param='" + input + "']").each(function() {
            this.value=val;
          });
          */
}

//fonction pour récupérer un objet de données du modèle de données
function getModel(input) {
  return Model.data[input];
}

//fonction pour mettre à jour le modèle de données
function setModel(input,val) {
  //Attention, la valeur passée par le input est un string, à convertir en integer
  Model.data[input].value = parseInt(val);
}

//Choix canal MIDI
function setMIDIChannel (val){
  Model.midiChannel = val;
}


 
 //Envoyer messages Sysex L
 sendSysex = function() {
 
var msgArray = [53,
                Model.midiChannel,
                35,
                32,
                1,
                Model.data["DCO_ENV_MODE"].value,
                Model.data["VCF_ENV_MODE"].value,
                Model.data["VCA_ENV_MODE"].value,
                Model.data["DCO_WAVE_PLS"].value,
                Model.data["DCO_WAVE_SAW"].value,
                Model.data["DCO_WAVE_SUB"].value,
                Model.data["DCO_RANGE"].value,
                Model.data["DCO_SUB_LVL"].value,
                Model.data["DCO_NOISE"].value,
                Model.data["VCF_HPF"].value,
                Model.data["CRS_SWITCH"].value,
                Model.data["DCO_LFO"].value,
                Model.data["DCO_ENV"].value,
                Model.data["DCO_AFTER"].value,
                Model.data["DCO_PWM_DEPTH"].value,
                Model.data["DCO_PWM_RATE"].value,
                Model.data["VCF_FREQ"].value,
                Model.data["VCF_RESONANCE"].value,
                Model.data["VCF_LFO"].value,
                Model.data["VCF_ENV"].value,
                Model.data["VCF_KEY"].value,
                Model.data["VCF_AFTER"].value,
                Model.data["VCA_LEVEL"].value,
                Model.data["VCA_AFTER"].value,
                Model.data["LFO_RATE"].value,
                Model.data["LFO_DELAY"].value,
                Model.data["ENV_T1"].value,
                Model.data["ENV_L1"].value,
                Model.data["ENV_T2"].value,
                Model.data["ENV_L2"].value,
                Model.data["ENV_T3"].value,
                Model.data["ENV_L3"].value,
                Model.data["ENV_T4"].value,
                Model.data["ENV_KEY"].value,
                Model.data["CRS_RATE"].value,
                Model.data["BENDER"].value,
              ] ;

 Model.WebMidiOutputs.sendSysex(0x41, msgArray);
 
 	}

//Test navigateur juste pour prévenir l'utilisateur que si ça n'est pas Chrome ou Safari c'est peine perdue (il faut Webkit).  C'est lancé dès le chargement de la page.
var isWebkit = /(chrome)/.test(navigator.userAgent.toLowerCase());

if (!isWebkit) {alert('This tool is designed specifically for Chrome.  Please consider using Chrome')}

//Test compatibilté WebMIDI
try {
        navigator.requestMIDIAccess({
            sysex: !0
        }).then(console.log("MIDI OK!"))
    } catch (a) {
        alert("Could not start Web MIDI. This tool is developed specifically for Chrome versions starting at 43 which are compatible with WebMIDI.")
    }

WebMidi.enable(function (err) {
    if (err) {
        console.warn(err);
    } else {
        console.log("Sysex is enabled!");

       Model.WebMidiOutputs = WebMidi.outputs[Model.midiChannel];

    }
}, true);



