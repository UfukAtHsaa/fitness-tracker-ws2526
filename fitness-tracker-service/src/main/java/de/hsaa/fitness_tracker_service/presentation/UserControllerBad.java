package de.hsaa.fitness_tracker_service.presentation;

import de.hsaa.fitness_tracker_service.service.User;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * UserController - BAD EXAMPLE mit Code Smells
 * Zeigt häufige Probleme in studentischem Code
 */
@RestController
@RequestMapping("/api/bad")
public class UserControllerBad {

    public static final int ADULT_AGE_LIMIT = 18;
    // Code Smell 1: Magic Strings & keine Konstanten
    private String url = "jdbc:mysql://localhost:3306/userdb";
    private String usr = "root";
    private String pwd = "password123";

    // Code Smell 2: Unklare Methodennamen & zu lange Methode
    // Code Smell 3: Keine Separation of Concerns (Controller macht DB-Zugriff)
    // Code Smell 4: Keine Exception Handling
    @PostMapping("/users")
    public String createUser(@RequestBody Map<String, String> data) throws Exception {
        Connection c = DriverManager.getConnection(url, usr, pwd);

        // Code Smell 5: String-Konkatenation in SQL (SQL Injection!)
        String sql = "INSERT INTO users (name, email, age) VALUES ('"
                + data.get("name") + "', '"
                + data.get("email") + "', "
                + data.get("age") + ")";

        Statement s = c.createStatement();
        int r = s.executeUpdate(sql);

        // Code Smell 6: Keine Resource-Schließung (Memory Leak)
        // Code Smell 7: Kryptische Variablennamen (c, s, r)

        if (r > 0) {
            return "ok";
        } else {
            return "failed";
        }
    }

    // Code Smell 8: Methode macht zu viel (Validation + DB + Business Logic)
    // Code Smell 9: Keine Input-Validierung
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable int id) throws Exception {
        Connection c = DriverManager.getConnection(url, usr, pwd);
        Statement s = c.createStatement();

        // Code Smell 10: String-Konkatenation statt PreparedStatement
        ResultSet rs = s.executeQuery("SELECT * FROM users WHERE id = " + id);

        User u = new User();
        if (rs.next()) {
            u.setId(rs.getLong("id"));
            u.setName(rs.getString("name"));
            u.setEmail(rs.getString("email"));
            u.setAge(rs.getInt("age"));

            // Code Smell 11: Business Logic im Controller
            setUserStatusBasedOnAge(u);
        }

        // Keine Ressourcen geschlossen!
        return u;
    }

    private static void setUserStatusBasedOnAge(User u) {
        if (isUserMinor(u)) {
            u.setStatus("minor");
        } else if (isUserAdultAndNotSenior(u)) {
            u.setStatus("adult");
        } else {
            u.setStatus("senior");
        }
    }

    private static boolean isUserAdultAndNotSenior(User u) {
        return u.getAge() >= ADULT_AGE_LIMIT && u.getAge() < 65;
    }

    private static boolean isUserMinor(User u) {
        return u.getAge() < ADULT_AGE_LIMIT;
    }

    // Code Smell 12: Copy-Paste Code (DRY Violation)
    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable int id, @RequestBody Map<String, String> data) throws Exception {
        Connection c = DriverManager.getConnection(url, usr, pwd);

        String sql = "UPDATE users SET name = '" + data.get("name")
                + "', email = '" + data.get("email")
                + "', age = " + data.get("age")
                + " WHERE id = " + id;

        Statement s = c.createStatement();
        int r = s.executeUpdate(sql);

        if (r > 0) {
            return "ok";
        } else {
            return "failed";
        }
    }

    // Code Smell 13: Keine Fehlerbehandlung für leere Ergebnisse
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable int id) throws Exception {
        Connection c = DriverManager.getConnection(url, usr, pwd);
        Statement s = c.createStatement();
        int r = s.executeUpdate("DELETE FROM users WHERE id = " + id);

        if (r > 0) {
            return "ok";
        } else {
            return "failed";
        }
    }

    // Code Smell 14: Methode mit vielen Parametern und komplexer Logik
    @GetMapping("/users/search")
    public List<User> searchUsers(
            @RequestParam(required = false) String n,
            @RequestParam(required = false) String e,
            @RequestParam(required = false) Integer minAge,
            @RequestParam(required = false) Integer maxAge,
            @RequestParam(required = false) String s
    ) throws Exception {

        List<User> list = new ArrayList<>();
        Connection c = DriverManager.getConnection(url, usr, pwd);

        // Code Smell 15: Komplexe String-Manipulation für Query-Building
        String sql = "SELECT * FROM users WHERE 1=1";
        if (n != null && !n.isEmpty()) sql += " AND name LIKE '%" + n + "%'";
        if (e != null && !e.isEmpty()) sql += " AND email LIKE '%" + e + "%'";
        if (minAge != null) sql += " AND age >= " + minAge;
        if (maxAge != null) sql += " AND age <= " + maxAge;
        if (s != null) sql += " AND status = '" + s + "'";

        Statement st = c.createStatement();
        ResultSet rs = st.executeQuery(sql);

        while (rs.next()) {
            User u = new User();
            u.setId(rs.getLong("id"));
            u.setName(rs.getString("name"));
            u.setEmail(rs.getString("email"));
            u.setAge(rs.getInt("age"));
            u.setStatus(rs.getString("status"));
            list.add(u);
        }

        return list;
    }
}