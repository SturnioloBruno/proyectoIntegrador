package com.grupo01.proyectointegrador.Service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;

import static java.io.File.createTempFile;

@Service
public class AwsS3Service {

    @Autowired
    private AmazonS3 amazonS3;

    @Value("${aws.s3.bucket}")
    private String nameBucket;

    public String uploadFile(String urlString, String product) throws Exception {
        URL url = new URL(urlString);
        String fileName = product + "_"+System.currentTimeMillis()+urlString.substring(urlString.lastIndexOf(".")) ;
        File mainFile =  createTempFile(fileName,urlString.substring(urlString.lastIndexOf(".")),null);
        try (InputStream in = url.openStream();
             BufferedInputStream bis = new BufferedInputStream(in);
             FileOutputStream fos = new FileOutputStream(mainFile)) {

            byte[] data = new byte[1024];
            int count;
            while ((count = bis.read(data, 0, 1024)) != -1) {
                fos.write(data, 0, count);
            }

            PutObjectRequest request = new PutObjectRequest(nameBucket+"/images",fileName,mainFile);
            amazonS3.putObject(request);

            mainFile.deleteOnExit();

        } catch (IOException e) {
            e.printStackTrace();
        }

        return "https://bucketdbgrupo1.s3.amazonaws.com/images/"+fileName;
    }
}
