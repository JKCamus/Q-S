import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.nextLine();
        String s2 = sc.nextLine();
        String[] array1 = s1.split(" ");
        String[] array2 = s2.split(" ");
        int stateA = 0;
        int stateB = 0;
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                if (array1[i].equals(array2[j])) {
                    if (i == j) {
                        stateA++;
                    } else {
                        stateB++;
                    }
                }
            }
        }
        System.out.printf("%dA%dB",stateA,stateB);
    }
}