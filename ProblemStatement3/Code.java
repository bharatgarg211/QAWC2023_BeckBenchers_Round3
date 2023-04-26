package org.example;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Code {
    /**
     * This program helps the school identify the nth rank student in each subject in the class.
     * It takes input from the user for the number of students, subjects, and the rank to be identified.
     * It then takes input for the name and marks of each student in each subject.
     * Finally, it calculates and displays the nth rank student in each subject.
     *
     * Requirements:
     * - The program should handle blank names as user input
     * - The program should handle invalid marks as user input
     * - The program should handle invalid rank as user input
     * - The program should handle edge cases like multiple students having the same marks
     *
     * @param args The command line arguments
     */

    private static final String NAME_PATTERN = "^[\\p{L} .'-]+$";
    private static final Pattern pattern = Pattern.compile(NAME_PATTERN);

    public static boolean isValid(final String username) {
        Matcher matcher = pattern.matcher(username);
        return matcher.matches();
    }
    public static void main(String[] args) throws Exception {
            Scanner scanner = new Scanner(System.in);

            // Take input for number of students, subjects, and rank to be identified
            System.out.print("Enter the number of students: ");
            int numStudents = scanner.nextInt();

            System.out.print("Enter the number of subjects: ");
            int numSubjects = scanner.nextInt();

            System.out.print("Enter the rank to be identified: ");
            int rank = scanner.nextInt();

            // Create a 2D array to store the marks of each student in each subject
            int[][] marks = new int[numStudents][numSubjects];

            // Take input for the name and marks of each student in each subject
            for (int i = 0; i < numStudents; i++) {
                scanner.nextLine(); // Consume the newline character left by nextInt()
                System.out.print("Enter the name of student " + (i+1) + ": ");
                String name = scanner.nextLine();
                if (!isValid(name)){
                    throw new Exception("Please enter the name in correct format");
                }

                for (int j = 0; j < numSubjects; j++) {
                    System.out.print("Enter the marks of " + name + " in subject " + (j+1) + ": ");
                    int mark = scanner.nextInt();

                    // Validate the marks
                    if (mark < 0 || mark > 100) {
                        System.out.println("Invalid marks entered. Please enter marks between 0 and 100.");
                        j--; // Re-prompt for the same subject
                        continue;
                    }

                    marks[i][j] = mark;
                }
            }

            // Calculate the nth rank student in each subject
            for (int j = 0; j < numSubjects; j++) {
                int[] subjectMarks = new int[numStudents];
                for (int i = 0; i < numStudents; i++) {
                    subjectMarks[i] = marks[i][j];
                }

                Arrays.sort(subjectMarks);
                int nthRankMark = subjectMarks[numStudents - rank];

                System.out.println("The " + rank + "th rank student in subject " + (j+1) + " is:");
                for (int i = 0; i < numStudents; i++) {
                    if (marks[i][j] == nthRankMark) {
                        System.out.println("Student: " + (i+1) + " - " + nthRankMark + " marks");
                    }
                }
            }

            scanner.close();
        }
}
