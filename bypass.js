// Taken from padenot's blog post:
// https://hacks.mozilla.org/2020/05/high-performance-web-audio-with-audioworklet-in-firefox/
class Bypass extends AudioWorkletProcessor {
    constructor() {
      super();
    }
    process(inputs, outputs) {
      const input = inputs[0];
      const output = outputs[0];

      for (let channel = 0; channel < output.length; ++channel) {
        output[channel].set(input[channel]);
      }

      return true;
    }
  }

  registerProcessor('bypass', Bypass);