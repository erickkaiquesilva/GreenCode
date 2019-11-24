package com.greencode.coleta.arduino;

import com.fazecast.jSerialComm.SerialPort;
import java.io.InputStream;

public class ColetaArduino {

    private SerialPort comPort = SerialPort.getCommPort("/dev/ttyACM0");

    public ColetaArduino() {
        comPort.openPort();
        comPort.setComPortTimeouts(SerialPort.TIMEOUT_READ_SEMI_BLOCKING, 0, 0);
        InputStream in = comPort.getInputStream();
        try {
            for (int j = 0; j < 1000; ++j) {
                System.out.print((char) in.read());
            }
            in.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public SerialPort getComPort() {
        return comPort;
    }
}
